const buttons__index = document.querySelector('.buttons__index');
const buttons__map = document.querySelector('.buttons__map');
//boton para solo ver las reflexiones y regresar
buttons__index.addEventListener('click', function() {
    window.location.href="/index.html";
});

buttons__map.addEventListener('click', function() {
    window.location.href="/mapa.html";
});


const list = document.querySelector('.list');

db.collection('comments')
.get()
.then((querySnapshot) => {

    list.innerHTML = '';
    
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const comment = document.createElement('section');
        comment.innerHTML = `
        <div class="comment__info">
             <p class=" =comment__text">
        ${data.reflection}
         </p>
         </div>
      `;
        comment.classList.add('comments');
        comment.setAttribute('href', `./comments.html?id=${doc.id}&name=${data.reflection}`);
        list.appendChild(comment);
    });
});
