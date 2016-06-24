bool connected;
bool motor;
bool button;

const int buttonPin = 0;
const int motorPin = 5;
int incomingByte = 0;

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

  if(Serial.available() > 0){
    incomingByte = Serial.read();

    if (incomingByte == 66 || incomingByte == 98 || incomingByte == 90 || incomingByte == 122) {
      motor = true;
    }

  }

  if(motor){
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
    digitalWrite(motorPin, HIGH);
    delay(1000);
    digitalWrite(motorPin, LOW);
    motor = false;
}

