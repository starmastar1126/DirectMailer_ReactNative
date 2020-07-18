//
//  UIImage+Helper.h
//  Wave
//
//  Created by Michale on 2/16/15.
//  Copyright (c) 2015 com.dragon. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface UIImage (Helper)

- (UIImage *)resizedImage:(CGSize)newSize interpolationQuality:(CGInterpolationQuality)quality;
- (UIImage *)resizedImage:(CGSize)newSize tintColor:(UIColor *)tintColor;
- (UIImage *)resizedImageWithContentMode:(UIViewContentMode)contentMode
                                  bounds:(CGSize)bounds
                    interpolationQuality:(CGInterpolationQuality)quality;

+ (unsigned char *) convertUIImageToBitmapRGBA8:(UIImage *)image;
+ (UIImage *) convertBitmapRGBA8ToUIImage:(unsigned char *)buffer withWidth:(int)width withHeight:(int)height;
+ (CGContextRef) newBitmapRGBA8ContextFromImage:(CGImageRef)image;
+ (UIImage *) emptyImage:(CGSize)szSize;

@end
