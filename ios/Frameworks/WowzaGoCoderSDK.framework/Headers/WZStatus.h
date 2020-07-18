//
//  WZStatus.h
//  WowzaGoCoderSDK
//
//  Copyright 2007 – 2016, Wowza Media Systems, LLC.  All rights
//  reserved.
//
//  The above copyright notice and this permission notice shall be
//  included in all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
//  OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
//  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
//  HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
//  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
//  OTHER DEALINGS IN THE SOFTWARE.
//

#import <Foundation/Foundation.h>

/*!
 @discussion WZStatusNewBitrateKey refers to the entry in a WZStatus' data member that contains the NSNumber representation
 of a new bitrate value.
 */
extern NSString * __nonnull const WZStatusNewBitrateKey;

/*!
 @discussion WZStatusPreviousBitrateKey refers to the entry in a WZStatus' data member that contains the NSNumber representation
 of a previous bitrate value.
 */
extern NSString * __nonnull const  WZStatusPreviousBitrateKey;

/*!
 @class WZStatus
 @discussion The WZStatus is a thread-safe class for working with SDK component state and error properties.
 Client applications don't normally have any need for creating a WZStatus object.
 */
@interface WZStatus : NSObject <NSMutableCopying, NSCopying>

/*!
 *  @typedef WZState
 *  @constant WZStateIdle The broadcasting ccomponent or session is idle; i.e. not broadcasting.
 *  @constant WZStateStarting The broadcasting component or session is starting up or initializing.
 *  @constant WZStateRunning The broadcasting component or session is broadcasting or running.
 *  @constant WZStateStopping The broadcasting component or session is shutting down.
 *  @constant WZStateBuffering The broadcasting component or session is buffering.
 *  @constant WZStateReady The broadcasting component or session is in a ready state or has been successfully initialized.
 *  @discussion The component state values.
 */
typedef NS_ENUM(NSUInteger, WZState) {
    WZStateIdle = 0,
    WZStateStarting,
    WZStateRunning,
    WZStateStopping,
    WZStateBuffering,
    WZStateReady
};

/*!
 *  @typedef WZEvent
 *  @constant WZEventNone No event.
 *  @constant WZEventLowBandwidth Network bandwidth was insufficient to keep up with the video broadcast settings. In this case, the encoder may attempt to recover by reducing bitrate and/or frame rate.
 *  @constant WZEventBitrateReduced Sent when the encoder reduces the bitrate to compensate for low bandwidth conditions. The WZStatus' data
 *  dictionary in this case will contain 2 keys with associated NSNumber values: WZStatusNewBitrateKey and WZStatusPreviousBitrateKey.
 *  @constant WZEventBitrateIncreased Sent when the encoder increases the the bitrate after having previously reduced it. The bitrate will never
 *  increase beyond the original bitrate specified in the configuration settings for the streaming session. The WZStatus' data dictionary in this
 *  case will contain 2 keys with associated NSNumber values: WZStatusNewBitrateKey and WZStatusPreviousBitrateKey.
 *  @constant WZEventEncoderPaused Sent when the encoder stops sending frames while waiting for queued frames to catch up. Typically, this would happen while the encoder is simultaneously reducing the bitrate to compensate for low bandwidth conditions.
 *  @constant WZEventEncoderResumed Sent when a previously paused encoder resumes.
 *  @discussion The component event values.
 */
typedef NS_ENUM(NSUInteger, WZEvent) {
    WZEventNone = 0,
    WZEventLowBandwidth,
    WZEventBitrateReduced,
    WZEventBitrateIncreased,
    WZEventEncoderPaused,
    WZEventEncoderResumed
};

#pragma mark - Properties

/*!
 *  The current state of the broadcast session
 */
@property (nonatomic) WZState state;

/*!
 *  The current state of the broadcast session
 */
@property (nonatomic) WZEvent event;

/*!
 *  The last error reported by the broadcast session.
 */
@property (nonatomic, strong, nullable) NSError * error;

/*!
 *  Data related to the status. May be null.
 */
@property (nonatomic, strong, nullable) NSDictionary * data;

#pragma mark - Class Methods

/*!
 *  Returns a WZStatus object with a given state
 *
 *  @param aState The state to initialize with
 *
 *  @return An initialized WZStatus object
 */
+ (nonnull instancetype) statusWithState:(WZState)aState;

/*!
 *  Returns a WZStatus object with a given state and error
 *
 *  @param aState The state to initialize with
 *  @param aError The error to initialzie with
 *
 *  @return An initialized WZStatus object
 */
+ (nonnull instancetype) statusWithStateAndError:(WZState)aState aError:(nonnull NSError *)aError;

/*!
 *  Returns a WZStatus object with a given event
 *
 *  @param event The WZEvent to initialize with
 *
 *  @return An initialized WZStatus object
 */
+ (nonnull instancetype) statusWithEvent:(WZEvent)event;

/*!
 *  Returns a WZStatus object with a given state and event
 *
 *  @param aState The state to initialize with
 *  @param event The WZEvent to initialize with
 *
 *  @return An initialized WZStatus object
 */
+ (nonnull instancetype) statusWithState:(WZState)aState event:(WZEvent)event;

#pragma mark - Instance Methods

/*!
 *  Initialize a WZStatus object with a given state
 *
 *  @param aState The state to initialize with
 *
 *  @return An initialized WZStatus object
 */
- (nonnull instancetype) initWithState:(WZState)aState;

/*!
 *  Initialize a WZStatus object with a given state and error
 *
 *  @param aState The state to initialize with
 *  @param aError The error to initialzie with
 *
 *  @return An initialized WZStatus object
 */
- (nonnull instancetype) initWithStateAndError:(WZState)aState aError:(nonnull NSError *)aError;

/*!
 *  Initialize a WZStatus object with a given event
 *
 *  @param event The WZEvent to initialize with
 *
 *  @return An initialized WZStatus object
 */
- (nonnull instancetype) initWithEvent:(WZEvent)event;

/*!
 *  Initialize a WZStatus object with a given state and event
 *
 *  @param aState The state to initialize with
 *  @param event The WZEvent to initialize with
 *
 *  @return An initialized WZStatus object
 */
- (nonnull instancetype) initWithState:(WZState)aState event:(WZEvent)event;

/*!
 *  Re-initialize a WZStatus object, clearing any error, event, and data values and setting the state to WZStateIdle
 */
- (void) resetStatus;

/*!
 *  Re-initialize a WZStatus object, clearing any error, event, and data values and setting the state to the specified value
 *
 *  @param aState The state to initialize with
 */
- (void) resetStatusWithState:(WZState)aState;

/*!
 *  Test to see if the state equals WZStateIdle
 *
 *  @return true if the state is WZStateIdle, false otherwise
 */
@property (readonly, nonatomic) BOOL isIdle;

/*!
 *  Test to see if the state equals WZStateStarting
 *`
 *  @return true if the state is WZStateStarting, false otherwise
 */
@property (readonly, nonatomic) BOOL isStarting;

/*!
 *  Test to see if the state equals WZStateReady
 *
 *  @return true if the state is WZStateReady, false otherwise
 */
@property (readonly, nonatomic) BOOL isReady;

/*!
 *  Test to see if the state equals WZStateRunning
 *
 *  @return true if the state is WZStateRunning, false otherwise
 */
@property (readonly, nonatomic) BOOL isRunning;

/*!
 *  Test to see if the state equals WZStateStopping
 *
 *  @return true if the state is WZStateStopping, false otherwise
 */
@property (readonly, nonatomic) BOOL isStopping;

/*!
 *  Test to see if the error is non-null
 *
 *  @return true if the error is non-null, false otherwise
 */
@property (readonly, nonatomic) BOOL hasError;

@end
