//
//  AppBridge.m
//  chilllMobile
//
//  Created by Michael Lee on 3/17/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "AppBridge.h"
#import <React/RCTUtils.h>
#import "NowPlaying.h"
#import "AppDelegate.h"

@interface AppBridge () <NowPlayingDelegate>

@end

@implementation AppBridge

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(setNowPlaying:(BOOL)playing thumb:(NSString *)thumbUrl title:(NSString *)title artist:(NSString *)artist)
{
  [[NowPlaying sharedInstance] setNowPlaying:playing thumb:thumbUrl title:title artist:artist delegate:self];
}

RCT_EXPORT_METHOD(setFullscreen:(BOOL)fullscreen) {
  AppDelegate * appDelegate = (AppDelegate *) [[UIApplication sharedApplication] delegate];
  [appDelegate changeFullscreen:fullscreen];
}

- (NSArray<NSString *> *)supportedEvents {
  return @[@"onRemotePlayEvent"];
}

- (void)onRemotePlay {
  [self sendEventWithName:@"onRemotePlayEvent" body:@{@"type" : @"play"}];
}

- (void)onRemotePause {
  [self sendEventWithName:@"onRemotePlayEvent" body:@{@"type" : @"pause"}];
}

- (void)onRemoteToggle {
  [self sendEventWithName:@"onRemotePlayEvent" body:@{@"type" : @"toggle"}];
}

- (void)onRemotePrev {
  [self sendEventWithName:@"onRemotePlayEvent" body:@{@"type" : @"prev"}];
}

- (void)onRemoteNext {
  [self sendEventWithName:@"onRemotePlayEvent" body:@{@"type" : @"next"}];
}

@end
