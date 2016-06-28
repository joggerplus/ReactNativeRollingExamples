//
//  MenuTableViewController.h
//  Eleven
//
//  Created by coderyi on 15/8/18.
//  Copyright (c) 2015年 coderyi. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "Example1ViewController.h"
#import "Example2ViewController.h"

@interface MenuTableViewController : UITableViewController
@property (nonatomic,strong) Example1ViewController *example1ViewController;
@property (nonatomic,strong) Example2ViewController *example2ViewController;

@end
