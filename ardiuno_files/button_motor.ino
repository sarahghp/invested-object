bool connected;
bool motor;
bool button;

const int buttonPin = 0;
const int motorPin = 5;

void putBeanToSleep();
void wakeUpBean();
void buzzMotor();


void setup() {
  // Initialize serial communication
  Serial.begin(57600);
  
  // Button setup
  pinMode(buttonPin, INPUT_PULLUP);
  
  // Motor setup
  pinMode(motorPin, OUTPUT);
  
  // Defensive sleep setup
  Bean.setLed(0, 0, 0);
  Bean.enableWakeOnConnect(true);
}

void loop() {
  connected = Bean.getConnectionState();
 
 if(connected) {
   wakeUpBean();
   button = !digitalRead(0);
   Serial.println("Connected");

  while(Serial.available() > 0){
    Serial.println("In but not read");
    char data = Serial.read();
    if (data == 1){
      Serial.print("Yes, I am here");
    }
    motor = true;

  }

  if(motor){
    Bean.setLed(0, 0, 255);
    buzzMotor();
  }

  if (button){
    Serial.println("Button");
  }
   
 }else{
   putBeanToSleep();
 }
}

void putBeanToSleep(){
  // Turn off the LED
   Bean.setLed(0, 0, 0);
   // Sleep forever or until the Bean wakes up by being connected to
   Bean.sleep(0xFFFFFFFF);
}

void wakeUpBean(){
  // Turn the LED green
   Bean.setLed(0, 255, 0);
   Bean.sleep(1000);
}

void buzzMotor(){
    Serial.println("Motor");
    digitalWrite(motorPin, HIGH);
    delay(1000);
    digitalWrite(motorPin, LOW);
    motor = false;
}

