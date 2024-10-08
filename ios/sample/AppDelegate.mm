#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
     @implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"sample";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
 
  // Add Firebase configuration
 
  [super application:application didFinishLaunchingWithOptions:launchOptions];

  return YES;
}


 

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}
 
 

 

@end
