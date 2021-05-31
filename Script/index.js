const productForm = document.querySelector('.write');
const write__change = document.querySelector('.write__change');
const write__btn = document.querySelector('.write__btn');

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


const hashtag__one = document.querySelector('.hashtag__one');
const hashtag__two = document.querySelector('.hashtag__two');
const hashtag__three = document.querySelector('.hashtag__three');
const hashtag__four = document.querySelector('.hashtag__four');
const hashtag__five = document.querySelector('.hashtag__five');
const hashtag__six = document.querySelector('.hashtag__six');

let changes = 0;

function handleChanges () {
    changes++;
    
    if(changes == 1){
        hashtag__one.style.display = 'none';
        hashtag__two.style.display = 'block';
        hashtag__three.style.display = 'none';
        hashtag__four.style.display = 'none';
        hashtag__five.style.display = 'none';
        hashtag__six.style.display = 'none';
    }
    
    if(changes == 2){
        hashtag__one.style.display = 'none';
        hashtag__two.style.display = 'none';
        hashtag__three.style.display = 'block';
        hashtag__four.style.display = 'none';
        hashtag__five.style.display = 'none';
        hashtag__six.style.display = 'none';
    }
    
    if(changes == 3) {
        hashtag__one.style.display = 'none';
        hashtag__two.style.display = 'none';
        hashtag__three.style.display = 'none';
        hashtag__four.style.display = 'block';
        hashtag__five.style.display = 'none';
        hashtag__six.style.display = 'none';
    }

    if(changes == 4) {
        hashtag__one.style.display = 'none';
        hashtag__two.style.display = 'none';
        hashtag__three.style.display = 'none';
        hashtag__four.style.display = 'none';
        hashtag__five.style.display = 'block';
        hashtag__six.style.display = 'none';
    }

    if(changes >= 5) {
        changes = 0;
        hashtag__one.style.display = 'none';
        hashtag__two.style.display = 'none';
        hashtag__three.style.display = 'none';
        hashtag__four.style.display = 'none';
        hashtag__five.style.display = 'none';
        hashtag__six.style.display = 'block';
    }
}

setInterval(handleChanges, 2000);






///////////////////////////////P5.JS///////////////////////////////

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

    console.log(changes);
  
}