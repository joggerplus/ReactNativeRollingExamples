//
//  MenuManager.h
//  AwesomeProject
//
//  Created by coderyi on 15/12/22.
//  Copyright © 2015年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#define kSharedMenuManager [MenuManager sharedInstance]

@interface MenuManager : NSObject
/**
 *  抽屉VC
 */
@property (nonatomic, readonly) UIViewController *drawerViewController;

/**
 *  set & get内容VC(抽屉中的主VC)
 */
@property (nonatomic, assign) UIViewController *contentViewController;

/**
 *  set & get菜单VC
 */
@property (nonatomic, assign) UIViewController *menuViewController;

/// 滑动手势是否开启
@property (nonatomic, assign) BOOL panGestureEnabled;

/**
 *  单例方法
 *
 *  @return 返回DEDrawerManager类型单例对象
 */
+ (instancetype)sharedInstance;

/**
 *  展示菜单View
 */
- (void)showMenuView;

/**
 *  隐藏菜单View
 *
 *  @param completionHandler 隐藏结束回调block
 */
- (void)hideMenuViewWithCompletionHandler:(void(^)(void))completionHandler;
@end
