//
//  MethodInvocation.h
//  Detox
//
//  Created by Tal Kol on 6/16/16.
//  Copyright © 2016 Wix. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTBridge.h"

@interface MethodInvocation : NSObject

+ (id) invoke:(NSDictionary*)params withBridge:(RCTBridge*)bridge onError:(void (^)(NSString*))onError;
+ (id) serializeValue:(id)value onError:(void (^)(NSString*))onError;

@end
