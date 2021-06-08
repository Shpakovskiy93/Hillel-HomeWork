
let inputEl = document.querySelector('.message');
let buttonEl = document.querySelector('.add');
let todoEl = document.querySelector('.todo');
const itemTemplate = document.getElementById('item_template').innerHTML;

let time = new Date().toLocaleString();

const itemDelete = evt => {
    
    if (evt.target.dataset['action'] === 'delete') {
        evt.target.parentElement.remove();
    } else if (evt.target.dataset['action'] === 'copy') {
        let liCopyEl = document.createElement('li');
        liCopyEl.innerHTML = evt.target.parentElement.innerHTML;
        todoEl.append(liCopyEl);
    }

    if (evt.target.checked == true) {
        evt.target.parentElement.style.textDecoration = 'line-through';
    } else {
        evt.target.parentElement.style.textDecoration = 'none';
    }
    
};

todoEl.addEventListener('click', itemDelete);

const render = (template, dataObject) => Object
    .keys(dataObject)
    .reduce((acc, key) => {
        return acc.replace(`{{${key}}}`, dataObject[key]);
}, template);

buttonEl.onclick = () => {
    time = new Date().toLocaleString();
    const inputValue = inputEl.value;

    if (!inputValue) return;

    const liEl = document.createElement('li');

    liEl.innerHTML = render(itemTemplate, {
        label: inputValue,
        data: time
    });

    todoEl.append(liEl);
    inputEl.value = '';

};

