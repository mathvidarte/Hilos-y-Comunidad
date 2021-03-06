const firebaseConfig = {
    apiKey: "AIzaSyA3r0HdWB8swRRHools2O862tp0PBzi2JI",
    authDomain: "aytlinesandcoments.firebaseapp.com",
    projectId: "aytlinesandcoments",
    storageBucket: "aytlinesandcoments.appspot.com",
    messagingSenderId: "445657054390",
    appId: "1:445657054390:web:39622408ba6773291eba17"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


const counter = [];
const numerito = document.querySelector('.numerito');

const handleCounter = (querySnapshot) => {
  querySnapshot.forEach((doc) => {
      counter.push(doc.id);
      if(!numerito) return;
      number = counter.length;
      numerito.innerText = counter.length;

      load();
  });
}

let comentarios = db.collection('comments').get().then(handleCounter);