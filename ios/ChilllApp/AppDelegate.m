/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <AVFoundation/AVFoundation.h>
#import <AudioToolbox/AudioToolbox.h>
#import "FullscreenViewController.h"
#import "NowPlaying.h"

@interface AppDelegate ()

@property (nonatomic, retain) UIWindow * windowFullscreen;
@property (nonatomic, assign) BOOL isFullscreen;

@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSError * sessionError;
  [[AVAudioSession sharedInstance] setCategory:AVAudioSessionCategoryPlayback error:&sessionError];
  
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"ChilllApp"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  [self initFullscreenWindow];
  
  return YES;
}

- (void)initFullscreenWindow {
  self.windowFullscreen = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  self.windowFullscreen.rootViewController = [[FullscreenViewController alloc] initWithNibName:@"FullscreenViewController" bundle:nil];
  self.windowFullscreen.hidden = YES;
  self.windowFullscreen.backgroundColor = [UIColor clearColor];
}

- (void)changeFullscreen:(BOOL)isFullscreen {
  dispatch_async(dispatch_get_main_queue(), ^{
    if (self.isFullscreen == isFullscreen) {
      return;
    }
    
    self.isFullscreen = isFullscreen;
    [self.windowFullscreen makeKeyAndVisible];
    [self performHideFullscreenWindow:0.5];
  });
}

- (void)performHideFullscreenWindow:(CGFloat)delay {
  [NSObject cancelPreviousPerformRequestsWithTarget:self selector:@selector(hideFullscreenWindow) object:nil];
  [self performSelector:@selector(hideFullscreenWindow) withObject:nil afterDelay:delay];
}

- (void)hideFullscreenWindow {
  if ([[UIApplication sharedApplication] keyWindow] == self.windowFullscreen) {
    self.windowFullscreen.hidden = YES;
    [self.windowFullscreen resignKeyWindow];
    [self.window makeKeyWindow];
  }
}

- (UIInterfaceOrientationMask)application:(UIApplication *)application supportedInterfaceOrientationsForWindow:(UIWindow *)window {
  if (window == self.windowFullscreen) {
    [self performHideFullscreenWindow:0.1];
  }
  
  if (self.isFullscreen) {
    return UIInterfaceOrientationMaskAll;
  } else {
    return UIInterfaceOrientationMaskPortrait;
  }
}

@end
