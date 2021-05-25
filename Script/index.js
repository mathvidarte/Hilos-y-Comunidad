const productForm = document.querySelector('.write');
const write__change = document.querySelector('.write__change');
const write__btn = document.querySelector('.write__btn');

let contador = 0;

productForm.addEventListener('submit', function (event) {
    event.preventDefault();
    //contador ++;

    const comment = {
       reflection: productForm.reflection.value,
    };

 //espera a subir la información al firestore
 db.collection('comments').add(comment)
 .then(function(docRef){
     console.log('comemnt added',docRef.id);
     window.location.href='./mapa.html';
    })
});



write__change.addEventListener('click', function() {
    window.location.href='./mapa.html';
});


let interface = 0;

function handleChanges () {
    interface++;
    if(interface >= 2) {
        interface = 0;
    }
//AQUI SE COLOCAN CUANDO SE TENGAN VARIOS GRUPOS DE 4 BOLITAS 
}

setInterval(handleChanges, 5000);









let bolas = [];
let one, two, three, four;

function setup () {
    createCanvas(windowWidth, windowHeight);
    //background (40);
    angleMode(DEGREES);
    noiseDetail(1);


    one = new Balls (300,150,random(0, 255),random(0, 255),random(0, 255),
    random(0, 255),random(0, 255),random(0, 255));

    two = new Balls (1200,350,random(0, 255),random(0, 255),random(0, 255),
    random(0, 255),random(0, 255),random(0, 255));

    three = new Balls (850,150,random(0, 255),random(0, 255),random(0, 255),
    random(0, 255),random(0, 255),random(0, 255));

    four = new Balls (1100,350,random(0, 255),random(0, 255),random(0, 255),
    random(0, 255),random(0, 255),random(0, 255));


    /*for (let i = 0; i < 2; i++) {
        bolas[i] = new Balls (random(100, 900), random(100, 600), 
        random(0, 255), random(0, 255), random(0, 255),
        random(0, 255), random(0, 255), random(0, 255)
        ); 
    }*/

    
}

function draw () {
    noStroke(); 

    one.pintar();
    two.pintar();

    stroke(255);
    textSize (50);
    text('#MeDuelesColombia', 550, 200);
    //three.pintar();
    //four.pintar();

    /*for (let i = 0; i < bolas.length; i++) {
        bolas[i].pintar();
    }*/
}