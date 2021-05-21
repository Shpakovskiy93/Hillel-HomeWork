
const input = document.createElement('input');
const userList = document.createElement('div');
const btn = document.createElement('button');
btn.innerText = 'add';
btn.onclick = main;

document.body.append(input,btn,userList);

function main() {
    let task = input.value;
    userList.innerHTML += `${task} <br/>`;
    input.value = '';
}


