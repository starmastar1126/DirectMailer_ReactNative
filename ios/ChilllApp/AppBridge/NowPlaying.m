//
//  NowPlaying.m
//  chilllMobile
//
//  Created by Michael Lee on 3/17/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "NowPlaying.h"
#import <MediaPlayer/MediaPlayer.h>
#import "AFImageDownloader.h"
#import "AppDelegate.h"
#import "UIImage+Helper.h"

@interface NowPlaying ()

@property (nonatomic, retain) AFImageDownloader * downloader;
@property (nonatomic, retain) AFImageDownloadReceipt * prevTask;

@property (nonatomic, retain) NSString * title;
@property (nonatomic, retain) NSString * artist;
@property (nonatomic, retain) NSString * thumbUrl;
@property (nonatomic, retain) UIImage * thumbImage;
@property (nonatomic, assign) BOOL playing;
@property (nonatomic, retain) id<NowPlayingDelegate> delegate;

@end

@implementation NowPlaying

+ (instancetype)sharedInstance {
  static NowPlaying * instance;
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    instance = [NowPlaying new];
    instance.downloader = [AFImageDownloader defaultInstance];
  });
  return instance;
}

- (void)setNowPlaying:(BOOL)playing thumb:(NSString *)thumbUrl title:(NSString *)title artist:(NSString *)artist delegate:(id<NowPlayingDelegate>)delegate {
  self.delegate = delegate;
  self.playing = playing;
  self.thumbUrl = thumbUrl;
  self.thumbImage = nil;
  self.title = title;
  self.artist = artist;
  
  [self startNowPlaying];
}

- (void)stopNowPlaying {
  if (self.prevTask) {
    [self.downloader cancelTaskForImageDownloadReceipt:self.prevTask];
  }
  
  [self unregisterNowPlaying];
}

- (void) startNowPlaying {
  if (self.prevTask) {
    [self.downloader cancelTaskForImageDownloadReceipt:self.prevTask];
    self.prevTask = nil;
  }
  
  NSLog(@"startNowPlaying %@", self.thumbUrl);
  
  NSURL * url = [NSURL URLWithString:self.thumbUrl];
  if (url == nil) {
    [self registerNowPlaying];
    return;
  }
  
  NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:url];
  
  self.prevTask = [self.downloader downloadImageForURLRequest:request success:^(NSURLRequest * _Nonnull request, NSHTTPURLResponse * _Nullable response, UIImage * _Nonnull responseObject) {
    self.prevTask = nil;
    self.thumbImage = responseObject;
    [self registerNowPlaying];
    NSLog(@"image download success");
  } failure:^(NSURLRequest * _Nonnull request, NSHTTPURLResponse * _Nullable response, NSError * _Nonnull error) {
    self.thumbImage = nil;
    [self registerNowPlaying];
    NSLog(@"image download failed");
  }];
}

- (void)registerNowPlaying {
  MPNowPlayingInfoCenter *infoCenter = [MPNowPlayingInfoCenter defaultCenter];
  NSMutableDictionary * info = [NSMutableDictionary dictionary];
  
  [info setObject:self.title forKey:MPMediaItemPropertyTitle];
  [info setObject:self.artist forKey:MPMediaItemPropertyArtist];
  [info setObject:@(self.playing ? 1.0 : 0.0) forKey:MPNowPlayingInfoPropertyPlaybackRate];
  
  if (self.thumbImage) {
    MPMediaItemArtwork * artwork = [[MPMediaItemArtwork alloc] initWithImage:[self.thumbImage resizedImage:CGSizeMake(150, 150) interpolationQuality:kCGInterpolationHigh]];
    [info setObject:artwork forKey:MPMediaItemPropertyArtwork];
  }
  infoCenter.nowPlayingInfo = info;
  
//  AppDelegate * delegate = (AppDelegate *)[UIApplication sharedApplication].delegate;
//  if (![delegate.window.rootViewController isFirstResponder]) {
//    [delegate.window.rootViewController becomeFirstResponder];
//  }
  [[UIApplication sharedApplication] beginReceivingRemoteControlEvents];
}

- (void)unregisterNowPlaying {
  AppDelegate * delegate = (AppDelegate *)[UIApplication sharedApplication].delegate;
  [delegate.window.rootViewController resignFirstResponder];
  [[UIApplication sharedApplication] endReceivingRemoteControlEvents];
}

- (void)onRemotePlay {
  if (self.delegate && [self.delegate respondsToSelector:@selector(onRemotePlay)]) {
    [self.delegate onRemotePlay];
  }
}

- (void)onRemotePause {
  if (self.delegate && [self.delegate respondsToSelector:@selector(onRemotePause)]) {
    [self.delegate onRemotePause];
  }
}

- (void)onRemoteToggle {
  if (self.delegate && [self.delegate respondsToSelector:@selector(onRemoteToggle)]) {
    [self.delegate onRemoteToggle];
  }
}

- (void)onRemoteNext {
  if (self.delegate && [self.delegate respondsToSelector:@selector(onRemoteNext)]) {
    [self.delegate onRemoteNext];
  }
}

- (void)onRemotePrev {
  if (self.delegate && [self.delegate respondsToSelector:@selector(onRemotePrev)]) {
    [self.delegate onRemotePrev];
  }
}

@end

@implementation UIViewController(NowPlaying)

- (BOOL)canBecomeFirstResponder {
  return YES;
}

- (void)remoteControlReceivedWithEvent:(UIEvent *)event {
  NowPlaying * playing = [NowPlaying sharedInstance];
  
  if (event.type == UIEventTypeRemoteControl) {
    if (event.subtype == UIEventSubtypeRemoteControlPlay) {
      NSLog(@"Remote play");
      [playing onRemotePlay];
    } else if (event.subtype == UIEventSubtypeRemoteControlPause) {
      NSLog(@"Remtoe pause");
      [playing onRemotePause];
    } else if (event.subtype == UIEventSubtypeRemoteControlTogglePlayPause) {
      NSLog(@"Remote toggle");
      [playing onRemoteToggle];
    } else if (event.subtype == UIEventSubtypeRemoteControlNextTrack) {
      NSLog(@"Remote next");
      [playing onRemoteNext];
    } else if (event.subtype == UIEventSubtypeRemoteControlPreviousTrack) {
      NSLog(@"Remote prev");
      [playing onRemotePrev];
    }
  }
}

@end
