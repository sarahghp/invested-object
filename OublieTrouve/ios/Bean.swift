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
    
    beanManager = PTDBeanManager()
    beanManager!.delegate = self
    delay(1000){
      self.startScanning()
    }
    
    print("Bean init called.")
  }
  
  func delay(delay:Double, closure:()->()) {
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW,Int64(delay * Double(NSEC_PER_SEC))),dispatch_get_main_queue(), closure)
  }
  
  func beanManagerDidUpdateState(beanManager: PTDBeanManager!) {
    var scanError: NSError?
    
    print("called didUpdateState")
    
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
        yourBean!.delegate = self
        connectToBean(yourBean!)
      }
  }
  
  func connectToBean(bean: PTDBean) {
    var error: NSError?
    beanManager?.connectToBean(bean, error: &error)
  }
  
  // Send buzz when triggered
  @objc func buzzBean(){
    print("Buzz called")
    sendSerialString("z")
  }
  
  func sendSerialString(message: String) {
    print("Send serial data \(message)")
    yourBean?.sendSerialString(message)
  }
  
  func bean(bean: PTDBean!, serialDataReceived data: NSData!) {
    var receivedMessage = NSString(data: data, encoding: NSUTF8StringEncoding)
    print("From serial: \(receivedMessage!)")
  }
  
}