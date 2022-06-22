let myForm = document.querySelector('#my-form');
let name = document.querySelector('#name');
let phone = document.querySelector('#phone');
let address = document.querySelector('#address');
let next = document.querySelector('#next');
let nextNum = document.querySelector('#nextNum');
let date = document.querySelector('#date');
let time = document.querySelector('#time');
let submit = document.querySelector('#submit');
let msg = document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
e.preventDefault();
console.log('Fine!');

if(name.value === '' || phone.value === '' || address.value === '' || next.value === '' || nextNum.value === '' || time.value === '' || date.value === '') {
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
}


}