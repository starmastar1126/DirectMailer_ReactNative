//
//  YoutubeParser.m
//  chilllMobile
//
//  Created by Michael Lee on 3/14/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "YoutubeParser.h"
#import <React/RCTUtils.h>
#import <XCDYouTubeKit/XCDYouTubeKit.h>

@implementation YoutubeParser

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(parseUrl:(NSString *)videoUrl callback:(RCTResponseSenderBlock)callback)
{
  [self videosWithYoutube:videoUrl completionHandler:^(NSString * url, NSError *error) {
    if (error) {
      callback(@[[NSNull null], RCTMakeError(error.localizedDescription, nil, nil)]);
    } else {
      callback(@[url, [NSNull null]]);
    }
  }];
}

- (void)videosWithYoutube:(NSString *)youtube completionHandler:(void (^)(NSString * url, NSError * error))handler {
  
  NSString * youtubeID = youtube;
  
  if ([youtube hasPrefix:@"http://"] || [youtube hasPrefix:@"https://"]) {
    NSRange range = [youtube rangeOfString:@"v="];
    if (range.location != NSNotFound) {
      
      NSInteger startIndex = range.location + range.length;
      NSInteger endIndex;
      range = [youtube rangeOfString:@"&"];
      if (range.location != NSNotFound) {
        endIndex = range.location;
      } else {
        endIndex = youtube.length;
      }
      
      youtubeID = [youtube substringWithRange:NSMakeRange(startIndex, endIndex - startIndex)];
    }
  }
  
  XCDYouTubeVideoOperation * videoOperation;
  videoOperation = [[XCDYouTubeClient defaultClient] getVideoWithIdentifier:youtubeID completionHandler:^(XCDYouTubeVideo *video, NSError *error) {
    if (video) {
      NSArray * prefQualities = @[ XCDYouTubeVideoQualityHTTPLiveStreaming, @(XCDYouTubeVideoQualityHD720), @(XCDYouTubeVideoQualityMedium360), @(XCDYouTubeVideoQualitySmall240) ];
      NSURL *streamURL = nil;
      
      for (NSNumber *videoQuality in prefQualities) {
        streamURL = video.streamURLs[videoQuality];
        if (streamURL) {
          handler([streamURL absoluteString], nil);
          return;
        }
      }
      
      NSError *noStreamError = [NSError errorWithDomain:XCDYouTubeVideoErrorDomain code:XCDYouTubeErrorNoStreamAvailable userInfo:nil];
      handler(nil, noStreamError);
    } else {
      handler(nil, error);
    }
  }];
}

@end
