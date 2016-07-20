//
//  Bean.swift
//  OublieTrouve
//
//  Created by breakers on 7/19/16.
//

import Foundation
import Bean_iOS_OSX_SDK

@objc(Bean)

class Bean: NSObject, PTDBeanManagerDelegate, PTDBeanDelegate {
  // Bridge to React-Native
  var bridge: RCTBridge!  // this is synthesized
  
  // Set up Bean classes
  var beanManager: PTDBeanManager?
  var yourBean: PTDBean?

  // Call from JS when app is opened to begin looking for Bean
  @objc func initBean() {
    
    beanManager = try PTDBeanManager()
    beanManager!.delegate = self
    startScanning()
        
//    do {
//      beanManager = try PTDBeanManager()
//      beanManager!.delegate = self
//      startScanning()
//    } catch {
//      print("Init error")
//    }
    
    print("Bean init called.")
  }
  
  func beanManagerDidUpdateState(beanManager: PTDBeanManager!) {
    var scanError: NSError?
    
    if beanManager!.state == BeanManagerState.PoweredOn {
      startScanning()
      if var e = scanError {
        print(e)
      } else {
        print("Please turn on your Bluetooth")
      }
    }
  }
  
  func startScanning() {
    var error: NSError?
    beanManager!.startScanningForBeans_error(&error)
    if let e = error {
      print(e)
    }
  }
  
  func beanManager(beanManager: PTDBeanManager!, didDiscoverBean bean: PTDBean!,
    error: NSError!) {
      if let e = error {
        print(e)
      }
      
      print("Found a Bean: \(bean.name)")
      if bean.name == "Talisbean" {
        yourBean = bean
        connectToBean(yourBean!)
      }
  }
  
  func connectToBean(bean: PTDBean) {
    var error: NSError?
    beanManager?.connectToBean(bean, error: &error)
  }
  
  // Send buzz when triggered
  @objc func buzzBean(){
    let str = "buzz"
    let data: NSData = str.dataUsingEncoding(NSUTF8StringEncoding)!
    sendSerialData(data)
  }
  
  func sendSerialData(message: NSData) {
    yourBean?.sendSerialData(message)
  }
}