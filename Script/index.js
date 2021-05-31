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




let one;

function setup () {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    noiseDetail(1);

    one = new Balls (width/2, height/2);
    
}

function draw () {
    noStroke(); 
    one.pintar();

    /*fill(210);
    textSize (40);
    text('#MeDuelesColombia', 550, 200);*/
  
}