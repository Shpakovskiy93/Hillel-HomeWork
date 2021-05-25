
document.getElementById('check').onclick = function() {
    let loginEl = document.getElementById('login').value;
    let passwordEl = document.getElementById('password').value;

    if (loginEl == 'admin' && passwordEl == 'password123') {
        let formEl = document.getElementById('form').style.display = 'none';
    } else{
        alert ('Incorrect login or password');
        loginEl = document.getElementById('login').value = '';
        passwordEl = document.getElementById('password').value = '';
    }
}