///////////////////////////////P5.JS///////////////////////////////

let commentsArray = [];
let variacion = 5;

const load = (function setup(){
    createCanvas(windowWidth, windowHeight);
 
    for (let i = 0; i < number; i++) {
        commentsArray[i] = new Line (variacion); 
        variacion += 15;
    }
});

function draw(){
    background(0);
    translate(windowWidth/2,windowHeight/2);
    stroke(255);
    noFill();

    for (let i = 0; i < commentsArray.length; i++) {
        commentsArray[i].pintar();
    }
}