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

const checkUser = (body = null) => {
    
    const requestURL = 'https://reqres.in/api/login';

    const headers = {
        'Content-Type': 'application/json'
    };

    return fetch(requestURL, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: headers
    });

};


btnEl.addEventListener('click', () => {
    const login = loginEl.value;
    const password = passwordEl.value;

    const requestBody = {
        "email": login,
        "password": password
    };

    checkUser(requestBody)
    .then( response => {
        if(response.status >= 200 && response.status < 400) {
            document.getElementById('form-wraper').remove();
            document.getElementById('welcom').classList.remove('welcom');
        } 
    })
    .catch( e => {
        errorMessageEl.classList.remove('form__text');
        document.getElementById('login').value = '';
        document.getElementById('password').value = '';
    });

});