//
//  BaseNavigationController.m
//  Eleven
//
//  Created by coderyi on 15/8/18.
//  Copyright (c) 2015年 coderyi. All rights reserved.
//

#import "BaseNavigationController.h"
#import "MenuTableViewController.h"
#import "REFrostedViewController.h"

#import "UIViewController+REFrostedViewController.h"
@interface BaseNavigationController ()
@property (strong, readwrite, nonatomic) MenuTableViewController *menuViewController;

@end

@implementation BaseNavigationController

- (void)viewDidLoad
{
    [super viewDidLoad];
//    [self.view addGestureRecognizer:[[UIPanGestureRecognizer alloc] initWithTarget:self action:@selector(panGestureRecognized:)]];
}

- (void)showMenu
{
    // Dismiss keyboard (optional)
    [self.view endEditing:YES];
    [self.frostedViewController.view endEditing:YES];
    
    // Present the view controller
    [self.frostedViewController presentMenuViewController];
}

#pragma mark -
#pragma mark Gesture recognizer

- (void)panGestureRecognized:(UIPanGestureRecognizer *)sender
{
    // Dismiss keyboard (optional)
    //
    [self.view endEditing:YES];
    [self.frostedViewController.view endEditing:YES];
    
    // Present the view controller
    //
    [self.frostedViewController panGestureRecognized:sender];
}


@end
