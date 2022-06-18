;
function preload(){

}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300); 
video.hide();
}

function draw(){
image(img,10,10,150,120);
fill("255,0,0")
stroke("255,0,0")
circle(350,50,70);

}
function take_snapshot(){
save('student_name.png');
    
}