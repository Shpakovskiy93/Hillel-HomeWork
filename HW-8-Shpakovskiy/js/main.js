function calc(a) {
    return {
        add: (b) => a = a + b,
        sub: (b) => a = a - b,
        div: (b) => a = a / b,
        mult: (b) => a = a * b,
        getResult: () => a
    }
}

const calcObj = calc(4);


calcObj.add(33);
calcObj.sub(12);
calcObj.div(2);
calcObj.mult(4);
console.log(calcObj.getResult());
