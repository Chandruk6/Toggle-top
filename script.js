const button=document.querySelector('.button i');
const navbar=document.querySelector('ul');

button.addEventListener('click',()=>{
    button.classList.toggle('fa-xmark');
    navbar.classList.toggle('slide');
});