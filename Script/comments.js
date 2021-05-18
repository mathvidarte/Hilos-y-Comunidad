const list = document.querySelector('.list');
db.collection('comments')
.get()
.then((querySnapshot) => {
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
