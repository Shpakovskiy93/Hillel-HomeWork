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
};

const onLoginChange = validateInput(loginEl);
loginEl.addEventListener('blur', onLoginChange);
loginEl.addEventListener('change', onLoginChange);

const onPasswordChenge = validateInput(passwordEl);
passwordEl.addEventListener('blur', onPasswordChenge);
passwordEl.addEventListener('change', onPasswordChenge);

const checkUser = (login, password) => {
    const requestBody = {
        "email": login,
        "password": password
    };

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://reqres.in/api/login');
        xhr.setRequestHeader('content-type', 'application/json');

        xhr.send(JSON.stringify(requestBody));

        xhr.onload = (e) => {
            const status = e.target.status;

            if(status >= 200 && status < 400) {
                resolve(JSON.parse(e.target.response));
            } else {
                reject(JSON.parse(e.target.response));
            }
        };
    });
};

const getUsersList = () => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://reqres.in/api/users?page=2');
        xhr.responseType = 'json';
        xhr.onload = () => {

            if(xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response);
            }
        };
        xhr.send();
    });
};

function innerList(arr) {
   
    const lestEl = document.querySelector('.welcom__list');

    for(let i = 0; i < arr.length; i++) {
        const liEl = document.createElement('li')
        liEl.innerHTML = `
            <img class="list__img" src="${arr[i].avatar}" />
            <span class="list__name">${arr[i].first_name} ${arr[i].last_name}</span>
            <span>${arr[i].email}</span>
        `;
        lestEl.append(liEl);
    };
};

btnEl.addEventListener('click', () => {
    const login = loginEl.value;
    const password = passwordEl.value;

    checkUser(login, password)
    .then(e => {
        document.getElementById('form-wraper').remove()
        document.getElementById('welcom').classList.remove('welcom')
    })
    .catch(e => {
        errorMessageEl.classList.remove('form__text');
        document.getElementById('login').value = '';
        document.getElementById('password').value = '';
    })
    .then(e => {
        return getUsersList();
    })
    .then(e => {
        innerList(e.data);
    })
    .catch(e => {
        console.log('another catch was applied');
    })
 
});
