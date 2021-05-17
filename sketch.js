const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundimage;
var response,j,daytime,hour;






function preload() {
    // create getBackgroundImg( ) here
    gettime();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundimage){
        background(backgroundimage);
    }
    textSize(30)
        if(hour>=12){
            text("Time: "+hour%12+"pm",50,50)
        }
        else if(hour == 0){
            text("Time: 12am",50,50)
        }
        else {text("Time: "+hour+"am",50,50)}
    
}

async function gettime(){
    response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    j = await response.json();
    daytime = j.datetime;
    hour =  daytime.slice(11,13);
   if(hour <= 8 && hour >= 6){
       var bg = "sunrise1.png";
   }
   else if(hour <= 10 && hour >= 8){
       var bg = "sunrise2.png";
   }
   else if(hour <= 12 && hour >= 10){
       var bg = "sunrise4.png";
   }
   else if(hour <= 14 && hour >= 12){
       var bg = "sunrise5.png";
   }
   else if(hour <= 15 && hour >= 14){
       var bg = "sunset7.png";
   }
   else if(hour <= 17 && hour >= 15){
       var bg = "sunset10.png";
   }
   else if(hour <= 20 && hour >= 17){
       var bg = "sunset11.png";
   }
   else {
       var bg = "sunset12.png";
   }
   backgroundimage = loadImage(bg);
    console.log(hour);
}
