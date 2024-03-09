let button = document.querySelector('.submitButton');
let passOne = document.getElementById('passwordOne');
let passTwo = document.getElementById('passwordTwo');


passOne.addEventListener('input',()=>{
    if( passOne.value.localeCompare(passTwo.value) != 0){
        passOne.className = 'password error';
        passTwo.className = 'password error';
    }
    else if(passOne.value.localeCompare(passTwo.value) == 0)
    {
        passOne.className = 'password';
        passTwo.className = 'password';
    }
    
});


passTwo.addEventListener('input',()=>{
    if( passOne.value.localeCompare(passTwo.value) != 0){
        passOne.className = 'password error';
        passTwo.className = 'password error';
    }
    else if(passOne.value.localeCompare(passTwo.value) == 0)
    {
        passOne.className = 'password';
        passTwo.className = 'password';
    }
    
});

