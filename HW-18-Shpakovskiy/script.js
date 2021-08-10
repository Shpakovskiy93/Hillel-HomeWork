import {LoginForm} from './components/LoginForm/LoginForm.js';
import {UserList} from './components/UserList/UserList.js';

const isUserLoggedIn = !!localStorage.getItem('isUserLoggedIn');

const loginComponent = new LoginForm(document.getElementById('login-form-tpl').innerHTML, 'main-entry', onSuccessLogin);
const userListComponent = new UserList(document.getElementById('user-list-item-tpl').innerHTML, 'main-entry')


function onSuccessLogin(e) {
    localStorage.setItem('isUserLoggedIn', true)
    loginComponent.dispose();
    userListComponent.render();
}

if(isUserLoggedIn) {
    userListComponent.render();
} else {
    loginComponent.render();
}

