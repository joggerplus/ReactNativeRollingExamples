//
//  RCTMenuManager.m
//  AwesomeProject
//
//  Created by coderyi on 15/12/22.
//  Copyright © 2015年 Facebook. All rights reserved.
//

#import "RCTMenuManager.h"
#import "RCTEventDispatcher.h"
#import "MenuManager.h"
#import "RCTUtils.h"

@implementation RCTMenuManager
@synthesize bridge=_bridge;

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(showMenu:(NSString *)menu f:(RCTResponseSenderBlock)callback)
{
  
  dispatch_async(dispatch_get_main_queue(), ^{
      MenuManager *drawerManager = [MenuManager sharedInstance];
      [drawerManager showMenuView];
  });

  callback(@[[NSNull null], @"test"]);
}
@end
