const productForm = document.querySelector('.productForm');
const productFormSuccess = document.querySelector('.productForm__success');
const productFormLoading = document.querySelector('.productForm__loading');
const productFormError = document.querySelector('.productForm__error');

let contador = 0;

productForm.addEventListener('submit', function (event) {
    event.preventDefault();
    contador ++;
    const comment = {
       reflection: productForm.reflection.value,
    };
 //espera a subir la información al firestore
 db.collection("comments").add(comment)
 .then(function(docRef){
     console.log('coment added',docRef.id);
     productFormSuccess.classList.remove('hidden');
     productFormLoading.classList.add('hidden');

 })
 .catch(function (error){
     productFormLoading.classList.add('hidden');
     productFormError.classList.remove('hidden');
});
});


