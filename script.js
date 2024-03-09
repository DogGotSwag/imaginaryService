let button = document.querySelector('.submitButton');
let passOne = document.getElementById('passwordOne');
let passTwo = document.getElementById('passwordTwo');


button.addEventListener('click' ,(event)=>{
    if( passOne.value !== passTwo.value ){
        event.preventDefault();
        passOne.className = 'password error';
        passTwo.className = 'password error';
    }

});