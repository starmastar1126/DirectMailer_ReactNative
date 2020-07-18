//
//  NowPlaying.h
//  chilllMobile
//
//  Created by Michael Lee on 3/17/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

@class NowPlaying;
@protocol NowPlayingDelegate <NSObject>

@optional
- (void) onRemotePlay;
- (void) onRemotePause;
- (void) onRemoteToggle;
- (void) onRemoteNext;
- (void) onRemotePrev;

@end

@interface NowPlaying : NSObject

+ (instancetype) sharedInstance;

- (void) setNowPlaying:(BOOL)playing thumb:(NSString *)thumbUrl title:(NSString *)title artist:(NSString *)artist delegate:(id<NowPlayingDelegate>)delegate;

@end


@interface UIViewController(NowPlaying)

@end
