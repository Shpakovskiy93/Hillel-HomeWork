
const TOPPINGS = {
    cheese: {price: 10, ccal: 20},
    salad: {price: 15, ccal: 10},
    potato: {price: 10, ccal: 20},
    spice: {price: 15, ccal: 0},
    mayonnaise: {price: 20, ccal: 5},
};

const SIZES = {
    small: 'small',
    medium: 'medium',
    extra: 'extra',
}

function Burger (size) {
    this.size = size;
    this.toppings = [];
    this.priceAndCcall = {
        [SIZES.small]: {
            price: 50,
            ccal: 20,
        },
        [SIZES.medium]: {
            price: 75,
            ccal: 30,
        },
        [SIZES.extra]: {
            price: 100,
            ccal: 40,
        },
    };
    this._init();
}

Burger.prototype._init = function() {
    const propertiSize = this.priceAndCcall[this.size];
    this.price = propertiSize ? propertiSize.price : 0;
    this.ccal = propertiSize ? propertiSize.ccal : 0;
}

Burger.prototype.getPrice = function() {
    return this.price + this.toppings.reduce((acc, e) => acc + e.price, 0);
}

Burger.prototype.getCcal = function() {
    return this.ccal + this.toppings.reduce((acc, e) => acc + e.ccal, 0);
}

Burger.prototype.addTopping = function(topping) {
    this.toppings.push(topping);
}

function CheeseBurger(size) {
    this.size = size;
    this.priceAndCcall = {
        [SIZES.small]: {
            price: 100,
            ccal: 40,
        },
        [SIZES.medium]: {
            price: 125,
            ccal: 60,
        },
        [SIZES.extra]: {
            price: 170,
            ccal: 80,
        },
    };
    this._init();
}
CheeseBurger.prototype = new Burger();

function FishBurger(size) {
    this.size = size;
    this.priceAndCcall = {
        [SIZES.small]: {
            price: 90,
            ccal: 30,
        },
        [SIZES.medium]: {
            price: 105,
            ccal: 35,
        },
        [SIZES.extra]: {
            price: 130,
            ccal: 50,
        },
    };
    this._init();
}
FishBurger.prototype = new Burger();

function TestyBurger(size) {
    this.size = size;
    this.priceAndCcall = {
        [SIZES.small]: {
            price: 190,
            ccal: 120,
        },
        [SIZES.medium]: {
            price: 225,
            ccal: 155,
        },
        [SIZES.extra]: {
            price: 280,
            ccal: 200,
        },
    };
    this._init();
}
TestyBurger.prototype = new Burger();



const burgerForMe = new TestyBurger(SIZES.medium);
burgerForMe.addTopping(TOPPINGS.cheese);
burgerForMe.addTopping(TOPPINGS.salad);
burgerForMe.addTopping(TOPPINGS.spice);

console.log(burgerForMe.getPrice());
console.log(burgerForMe.getCcal());
