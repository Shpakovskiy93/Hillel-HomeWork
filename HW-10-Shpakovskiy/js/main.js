
const USERS = [
    { login: 'admin', password: 'password'},
    { login: 'Vlad', password: 'password'},
    { login: 'user', password: '1234'},
];

let btnEl = document.getElementById('check');
let loginEl = document.getElementById('login');
let passwordEl = document.getElementById('password');
const errorMessageEl = document.getElementById('message-incorect'); 

const validateInputs = () => {
    if (!!loginEl.value || !!passwordEl.value) {
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

const checkUser = (login, password) => {
    return !!USERS.find(e => e.login === login && e.password === password);
};

btnEl.addEventListener('click', () => {
    const login = loginEl.value;
    const password = passwordEl.value;

    if (checkUser (login, password)) {
        document.getElementById('form-wraper').remove();
        document.getElementById('welcom').classList.remove('welcom');
    } else {
        errorMessageEl.classList.remove('form__text');
        document.getElementById('login').value = '';
        document.getElementById('password').value = '';
    }
});