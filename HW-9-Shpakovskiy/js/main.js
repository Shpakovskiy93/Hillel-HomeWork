
const inputEl = document.createElement('input');
const userListEl = document.createElement('div');
const btnEl = document.createElement('button');
btnEl.innerText = 'add';
btnEl.onclick = main;

document.body.append(inputEl,btnEl,userListEl);

function main() {
    let task = inputEl.value;
    userListEl.innerHTML += `${task} <br/>`;
    inputEl.value = '';
}


