let bolas = [];


function setup () {
    createCanvas(windowWidth, windowHeight);
    background (38);
    angleMode(DEGREES);
    noiseDetail(1);

    for (let i = 0; i < 2; i++) {
        bolas[i] = new Balls (random(100, 900), random(100, 600), 
        random(0, 255), random(0, 255), random(0, 255),
        random(0, 255), random(0, 255), random(0, 255)
        ); 
    }

    console.log()
    
}

function draw () {
    noStroke(); 

    for (let i = 0; i < bolas.length; i++) {
        bolas[i].pintar();
    }
}