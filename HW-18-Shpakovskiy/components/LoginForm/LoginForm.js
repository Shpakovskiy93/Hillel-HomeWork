import {checkUserCredentials} from '../../api.js'
import Component from '../../core/component.js';


export class LoginForm extends Component{
    constructor(template, entryId, onSuccess) {
        super(template, entryId)
        this.onSuccess = onSuccess;

        this.loginInputEl = this.getElementById('login-input');
        this.passwordInputEl = this.getElementById('password-input')

        this.errorMessage = this.getElementById('error-message');

        this.loginInputEl.addEventListener('input', this.validate);
        this.passwordInputEl.addEventListener('input', this.validate);

        this.getElementById('sign-in-btn').addEventListener('click', this.onSignInClick.bind(this))
    }


    validate(evtObject) {
        const inputEl = evtObject.target;
        if (!inputEl.value) {
          inputEl.classList.add("is-error");
        } else {
          inputEl.classList.remove("is-error");
        }
    }

    onSignInClick() {
        const login = this.loginInputEl.value;
        const password = this.passwordInputEl.value;
        this.errorMessage.classList.add('hidden');

        checkUserCredentials(login, password)
            .then(e => {
                this.onSuccess(e)
            })
            .catch(() => {
                this.errorMessage.classList.remove('hidden');
            })
    }


}