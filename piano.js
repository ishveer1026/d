img="";
status="";
object=[];
function preload(){
    img=loadImage("2.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function draw(){
    image(img,0,0,640,420);
    if(status != ""){
        
    }
}
function modelLoaded(){
    console.log("Modell Loaded!");
    status=true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}