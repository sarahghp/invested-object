//
//  Bean.swift
//  OublieTrouve
//
//  Created by breakers on 7/19/16.
//

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
      var scanError: NSError?
      self.startScanning(&scanError)
    }
    
    print("Bean init called.")
  }
  
//  @objc func initBean() {
//    
//    beanManager = PTDBeanManager()
//    beanManager!.delegate = self
//
//    dispatch_async(dispatch_get_main_queue()){
//      var scanError: NSError?
//      self.startScanning(&scanError)
//    }
//    
//    print("Bean init called.")
//  }
  

  
  func delay(delay:Double, closure:()->()) {
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW,Int64(delay * Double(NSEC_PER_SEC))),dispatch_get_main_queue(), closure)
  }
  
  func beanManager(beanManager: PTDBeanManager!, didConnectBean bean: PTDBean!, error: NSError!) {
    print("did connect")
    yourBean!.delegate = self
  }
  
  func beanManagerDidUpdateState(beanManager: PTDBeanManager!) {
    var scanError: NSError?
    
    print("called didUpdateState")
    
    if beanManager!.state == BeanManagerState.PoweredOn {
      startScanning(&scanError)
      if let e = scanError {
        print(e)
      } else {
        print("Please turn on your Bluetooth")
      }
    }
  }
  
  func startScanning(inout scanError: NSError?) {
    beanManager!.startScanningForBeans_error(&scanError)
    if let e = scanError {
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
  

  
  @objc func buzzBean(){
    print("Buzz called")
    var state: Bool = true;
    let data = NSData(bytes: &state, length: sizeof(Bool))
    
    dispatch_async(dispatch_get_main_queue()){
      self.sendSerialData(data)
    }
    
  }

  func sendSerialData(message: NSData) {
    print("Send serial data \(message)")
    yourBean?.sendSerialData(message)
  }
  
  func bean(bean: PTDBean!, serialDataReceived data: NSData!) {
    let receivedMessage = NSString(data: data, encoding: NSUTF8StringEncoding)
    print("From serial: \(receivedMessage!)")
  }
  
}