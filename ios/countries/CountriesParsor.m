//
//  CountriesParsor.m
//  Coffee
//
//  Created by Varsha on 02/10/19.
//  Copyright © 2019 Facebook. All rights reserved.
//
#import <Foundation/Foundation.h>
#import "CountriesParsor.h"

@implementation CountriesParsor{
  NSMutableDictionary * countryCities;
}
RCT_EXPORT_MODULE();

- (instancetype)init
{
  self = [super init];
  if (self) {
    [self readLocalJsonFile];
  }
  return self;
}

+ (BOOL)requiresMainQueueSetup{
  return true;
}

-(void)readLocalJsonFile{
  //get file name
  NSString *fileName =[[NSBundle mainBundle] pathForResource:@"countriesList" ofType:@"json"];
  
  //check file exists
  if (fileName) {
    //retrieve file content
    NSData *countriesData = [[NSData alloc] initWithContentsOfFile:fileName];
    //convert JSON NSData to a usable NSDictionary
    NSError *error;
    countryCities = [NSJSONSerialization JSONObjectWithData:countriesData options:0 error:&error];
    if (error) {
      countryCities = [[NSMutableDictionary alloc] init];
    }
  }else{
    countryCities = [[NSMutableDictionary alloc] init];
  }
}

//exports a method get countries to javascript
RCT_EXPORT_METHOD(getCountries:(RCTResponseSenderBlock)callback){
//  NSMutableDictionary *countryCities = [self readLocalJsonFile];
  callback(@[ countryCities.allKeys]);
}

//exports a method get countries to javascript
RCT_EXPORT_METHOD(getCitiesFor:(NSString*)countryName callback:(RCTResponseSenderBlock)callback){
//  NSMutableDictionary *countryCities = [self readLocalJsonFile];
  callback(@[[countryCities valueForKey:countryName]]);
}
@end
