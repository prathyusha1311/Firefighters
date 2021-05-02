#include<ThingSpeak.h>
#include<ESP8266WiFi.h>
#include<WiFiClient.h>
WiFiClient client;
unsigned long ChanelNumber= 1377173;
const char* WriteApikey ="CO91P0YCUPRYCLXU";
const char* ReadApikey="WJG57RWMVNMTL2XW";
char* server="api.thingspeak.com";
const int fieldnum1=1;//field 1 for room1 
const int fieldnum2=2;//field 2 for room 2

int flamesensorpin1=4;//D2 - flame sensor input pin for room 1

int ledpin1=14;//D5 for room1
int flame_state1=LOW;//initial state in case of falme sensor in room 1 is 0
int flamesensorpin2=13;//D7 - flame sensor input pin for room 2
int buzzerpin2=12;//D6 - buzzer pin for room 2
int ledpin2=15;//D8 for room2
int flame_state2=LOW;//initial state in case of falme sensor in room 2 is 0

void setup()
{
  Serial.begin(115200);
  delay(2000);
  
  pinMode(ledpin1,OUTPUT);
  pinMode(flamesensorpin1,INPUT);
  pinMode(buzzerpin2,OUTPUT);
  pinMode(ledpin2,OUTPUT);
  pinMode(flamesensorpin2,INPUT);
  Serial.println();
  
  WiFi.begin("Naresh","snk@1964");

   Serial.print("Connecting");
   while(WiFi.status()!=WL_CONNECTED)
   {
    delay(500);
    Serial.print(".");
   }
   Serial.println();
   Serial.print("Connected,IPaddress: ");
   Serial.println(WiFi.localIP());
   ThingSpeak.begin(client);
   digitalWrite(buzzerpin2,LOW);
}
void loop() 
{
  digitalWrite(buzzerpin2,LOW);
  delay(5000);
  Serial.println("Welcome to fire fighting system!"); 
  Serial.print("Reading from flame sensor of room1: ");
  flame_state1=digitalRead(flamesensorpin1);
  Serial.println(flame_state1);
  Serial.print("Reading from flame sensor of room2: ");
  flame_state2=digitalRead(flamesensorpin2);
  Serial.println(flame_state2);
  if(flame_state1==1)
  {
      digitalWrite(buzzerpin2,HIGH);
      digitalWrite(ledpin1,HIGH);
    }
    else
    {  digitalWrite(buzzerpin2,LOW); 
      digitalWrite(ledpin1,LOW);}
  if(flame_state2==0)
  {
    digitalWrite(buzzerpin2,HIGH);
  digitalWrite(ledpin2,HIGH);
   }
   else
   {   
    digitalWrite(buzzerpin2,LOW);
      digitalWrite(ledpin2,LOW);}
  ThingSpeak.writeField(ChanelNumber, fieldnum1,flame_state1,WriteApikey);
  delay(15000);
  ThingSpeak.writeField(ChanelNumber,fieldnum2,flame_state2,WriteApikey);
 Serial.println("data sent to thingspeak");
  delay(15000);
 

}
