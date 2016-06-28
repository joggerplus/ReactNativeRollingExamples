//
//  MenuManager.m
//  AwesomeProject
//
//  Created by coderyi on 15/12/22.
//  Copyright © 2015年 Facebook. All rights reserved.
//

#import "MenuManager.h"
#import "REFrostedViewController.h"
static MenuManager *instance = nil;
@interface MenuManager () <REFrostedViewControllerDelegate> {
  REFrostedViewController *_frostedViewController;
}

@end
@implementation MenuManager

+ (instancetype)sharedInstance
{
  static dispatch_once_t onceToken;
  
  dispatch_once(&onceToken, ^{
    instance = [[MenuManager alloc] init];
  });
  
  return instance;
}

#pragma mark - Overload method

- (instancetype)init
{
  self = [super init];
  if (self) {
    _frostedViewController = [[REFrostedViewController alloc] init];
    _frostedViewController.limitMenuViewSize = YES;
//    if (isIOS7GE)
//    {
//      _frostedViewController.liveBlur = NO;
//    }
    _frostedViewController.direction = REFrostedViewControllerDirectionLeft;
    self.panGestureEnabled = NO;
  }
  return self;
}

#pragma mark - Public method

- (UIViewController *)drawerViewController
{
  return _frostedViewController;
}

- (UIViewController *)contentViewController
{
  return _frostedViewController.contentViewController;
}

- (void)setContentViewController:(UIViewController *)viewController
{
  _frostedViewController.contentViewController = viewController;
}

- (UIViewController *)menuViewController
{
  return _frostedViewController.menuViewController;
}

- (void)setMenuViewController:(UIViewController *)viewController
{
  _frostedViewController.menuViewController = viewController;
}

- (BOOL)panGestureEnabled
{
  return _frostedViewController.panGestureEnabled;
}

- (void)setPanGestureEnabled:(BOOL)panGestureEnabled
{
  _frostedViewController.panGestureEnabled = panGestureEnabled;
}

- (void)showMenuView
{
  [_frostedViewController presentMenuViewController];
}

- (void)hideMenuViewWithCompletionHandler:(void (^)(void))completionHandler
{
  [_frostedViewController hideMenuViewControllerWithCompletionHandler:completionHandler];
}

#pragma mark - REFrostedViewControllerDelegate

- (void)frostedViewController:(REFrostedViewController *)frostedViewController willAnimateRotationToInterfaceOrientation:(UIInterfaceOrientation)toInterfaceOrientation duration:(NSTimeInterval)duration
{
}

- (void)frostedViewController:(REFrostedViewController *)frostedViewController didRecognizePanGesture:(UIPanGestureRecognizer *)recognizer
{
}

- (void)frostedViewController:(REFrostedViewController *)frostedViewController willShowMenuViewController:(UIViewController *)menuViewController
{
}

- (void)frostedViewController:(REFrostedViewController *)frostedViewController didShowMenuViewController:(UIViewController *)menuViewController
{
}

- (void)frostedViewController:(REFrostedViewController *)frostedViewController willHideMenuViewController:(UIViewController *)menuViewController
{
}

- (void)frostedViewController:(REFrostedViewController *)frostedViewController didHideMenuViewController:(UIViewController *)menuViewController
{
}

@end
