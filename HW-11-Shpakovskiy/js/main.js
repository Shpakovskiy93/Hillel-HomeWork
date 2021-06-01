
let inputEl = document.querySelector('.message');
let buttonEl = document.querySelector('.add');
let todoEl = document.querySelector('.todo');


buttonEl.addEventListener('click', function(e) {

    if(inputEl.value === '') return;

    createDeleteElements(inputEl.value);
    inputEl.value = '';

})

function createDeleteElements (value) {

    const li = document.createElement('li');
    li.textContent = value;

    const btn = document.createElement('button')
    btn.textContent = 'delete';


    let time = new Date();

    const span = document.createElement('span')
    span.textContent = time.toLocaleString();
    

    btn.addEventListener('click', (e) => {
        todoEl.removeChild(li)
    })

    li.addEventListener('click', (e) => {
        li.classList.toggle('li_active')
    })

    li.appendChild(span);
    li.appendChild(btn);
    
    todoEl.appendChild(li);
}
