let myForm = document.querySelector('#my-form');
let boatName = document.querySelector('#boat-name');
let name = document.querySelector('#name');
let phone = document.querySelector('#phone');
let seat = document.querySelector('#seat-number');
let amount = document.querySelector('#amount');
let date = document.querySelector('#date');
let time = document.querySelector('#time');
let submit = document.querySelector('#submit');

let msg = document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
e.preventDefault();
console.log('Fine!');

if(name.value === '' || boatName.value === '' || phone.value === '' || seat.value === '' || amount.value === '' || time.value === '' || date.value === '') {
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
}


}