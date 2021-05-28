
let btnEl = document.querySelector('#check');
let loginEl = document.querySelector('#login');
let passwordEl = document.querySelector('#password');

function btnDis() {
    if(loginEl.value.length == 0 || passwordEl.value.length == 0) {
        btnEl.disabled = true;
    } else {
        btnEl.disabled = false;
        btnEl.style.backgroundColor = 'gold';
        btnEl.style.cursor = 'pointer';
    }
}

loginEl.addEventListener('keyup', btnDis);
passwordEl.addEventListener('keyup', btnDis);
btnEl.addEventListener('click', () => {

    let wellcomAlertEl = document.querySelector('.wellcom__alert');
    let incorectAlertEl = document.querySelector('.incorect__alert');

    if (loginEl.value == 'admin' && passwordEl.value == 'password123') {
        wellcomAlertEl.style.display = 'block';
    }else{
        wellcomAlertEl.style.display = 'none';
        alert('incorect login or password!');
        location.reload();
    }
})
