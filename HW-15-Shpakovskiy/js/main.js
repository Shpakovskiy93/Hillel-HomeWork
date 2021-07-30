let btnEl = document.getElementById('check');
let loginEl = document.getElementById('login');
let passwordEl = document.getElementById('password');
const errorMessageEl = document.getElementById('message-incorect'); 

const validateInputs = () => {
    if (loginEl.value || passwordEl.value) {
        btnEl.classList.remove('is-disabled');
        btnEl.removeAttribute('disabled');
    } else {
        btnEl.classList.add('is-disabled');
        btnEl.setAttribute('disabled', 'disabled');
    }
};

const validateInput = inputEl => {
    return () => {
        errorMessageEl.classList.add('form__text');
        if (!inputEl.value) {
            inputEl.classList.add('arror');
        } else {
            inputEl.classList.remove('arror');
        }
        validateInputs();
    };
}

const onLoginChange = validateInput(loginEl);
loginEl.addEventListener('blur', onLoginChange);
loginEl.addEventListener('change', onLoginChange);

const onPasswordChenge = validateInput(passwordEl);
passwordEl.addEventListener('blur', onPasswordChenge);
passwordEl.addEventListener('change', onPasswordChenge);

const checkUser = (login, password, onSuccess, onFail) => {
    const requestBody = {
        "email": login,
        "password": password
    }
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://reqres.in/api/login');
    xhr.setRequestHeader('content-type', 'application/json')

    xhr.send(JSON.stringify(requestBody));

    xhr.onload = (e) => {
        const status = e.target.status

        if(status >= 200 && status < 400) {
            onSuccess(JSON.parse(e.target.response))
        } else {
            onFail(JSON.parse(e.target.response))
        }
    }
};




btnEl.addEventListener('click', () => {
    const login = loginEl.value;
    const password = passwordEl.value;

    checkUser(login, password, e => {
        document.getElementById('form-wraper').remove();
        document.getElementById('welcom').classList.remove('welcom');
    }, e => {
        errorMessageEl.classList.remove('form__text');
        document.getElementById('login').value = '';
        document.getElementById('password').value = '';
    })

});