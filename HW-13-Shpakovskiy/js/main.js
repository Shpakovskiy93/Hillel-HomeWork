
function Accordion(element) {
    
    this.element = element;
    this.init = accordionInit;
    this.toogle = toggleItem;
    this._onItemClick = onItemClick;
    this.addBlock = addBlock;
    this.openAll = openAll;
    this.closeAll = closeAll;
    this.getOpenIndexes = getOpenIndexes;

    this.element.addEventListener('click', this._onItemClick.bind(this));

}

function getOpenIndexes() {
    let openIndex = [];
    Array.prototype.forEach.call(this.element.children, e => {
        openIndex.push(e)
        if(e.classList.contains('extended')) {
            console.log(openIndex.indexOf(e));
        }
    })
    return openIndex
}

function openAll() {
    Array.prototype.forEach.call(this.element.children, e => {
        e.classList.add('extended');
    })
}
function closeAll() {
    Array.prototype.forEach.call(this.element.children, e => {
        e.classList.remove('extended');
    })
}


function accordionInit() {
    Array.prototype.forEach.call(this.element.children, e => {
        e.classList.add('accordion-item');
        if(e.children.length >= 2) {
            e.children[0].classList.add('title');
            e.children[1].classList.add('content');
        } else {
            throw new Error('Invalid accordion item');
        }
    })
}

function toggleItem(index) {
    const element = this.element.children[index];
    if(element) {
        element.classList.toggle('extended');
    }
}

function onItemClick(e) {
    e.target.parentElement.classList.toggle('extended');
}



function addBlock(title, description) {
    this.element.insertAdjacentHTML('beforeEnd', `<div class="accordion-item">
        <div class="title accordion__item-title">${title}</div>
        <div class="content accordion__item-text">${description}</div>
    </div>`);
}

const mainAccordion = new Accordion(document.getElementById('accordion'));
mainAccordion.init();

