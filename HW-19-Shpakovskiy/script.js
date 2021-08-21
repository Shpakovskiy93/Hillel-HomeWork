import {LoginForm} from './components/LoginForm/LoginForm.js';
import {UserList} from './components/UserList/UserList.js';
import {getUserList, createUser} from './api.js'

const isUserLoggedIn = localStorage.getItem('token');


const loginComponent = new LoginForm(document.getElementById('login-form-tpl').innerHTML, 'main-entry', onSuccessLogin);
const userListComponent = new UserList(document.getElementById('user-list-item-tpl').innerHTML, 'main-entry', onLogOut);


function onSuccessLogin({token}) {
    localStorage.setItem('token', token);
    loginComponent.dispose();
    loadUsers();
}

function onLogOut() {
    localStorage.removeItem('token');
    userListComponent.dispose();
    loginComponent.render();
}

function loadUsers() {
    getUserList().then(({data}) => {
        userListComponent.setState({list: data});
    });
}

if(isUserLoggedIn) {
    loadUsers();
} else {
    loginComponent.render();
}

