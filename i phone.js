img= "";
status= "";
objects= "";

function preload(){
    img = loadImage('i phone.jpg');
} 

function setup (){
    canvas=createCanvas(500,600);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
   
}
function modelLoaded(){
    console.log("Model Loaded!");
    status= true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error, results){
if (error) {
    console.log(error);
    

}
console.log(results);

}

function draw(){
    image(img,0,0,300,400);

    if(status != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects Detected";

            fill("#486A47");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%",objects[i].x , objects[i].y );
            noFill();
            stroke("#486A47");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }

}