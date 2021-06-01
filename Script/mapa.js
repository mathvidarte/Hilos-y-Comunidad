
const see__reflections = document.querySelector('.see__reflections');
const see__gotowrite = document.querySelector('.see__gotowrite');
//boton para solo ver las reflexiones y regresar
see__reflections.addEventListener('click', function() {
    window.location.href="/coments.html";
});

see__gotowrite.addEventListener('click', function() {
    window.location.href="/index.html";
});

///////////////////////////////P5.JS///////////////////////////////

let commentsArray = [];
let variacion = 5;
let zoff = 0.01;


const load = (function setup(){
    createCanvas(windowWidth, windowHeight);
 
    for (let i = 0; i < number; i++) {
        commentsArray[i] = new Line (variacion, zoff); 
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