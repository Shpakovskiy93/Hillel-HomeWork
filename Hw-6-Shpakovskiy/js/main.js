
function factorialFirst(x) {
    let total = 1;
    for (let i = 0; i < x; i++){
        total = total * (x - i);
    }
    alert(total);
}

let numFirst = +prompt('Please enter an integer');
factorialFirst(numFirst);

//===============================================================================

function factorial(n) {
    return (n > 1) ? n * factorial(n - 1) : 1;
}

let numSecond = +prompt('Please enter an integer');
alert( factorial(numSecond) );

//===============================================================================

function work(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (num > arr[i]) return true;
    }
    return false;
}

function clever(arr, num) {
    if (work (arr, num)) {
        arr.shift();
        arr.push(num);
    } else {
        arr.pop();
        arr.unshift(num);
    }
    return arr;
}

console.log(clever([16, 47, 32, 423, 76], 4));
console.log(clever([16, 47, 32, 423, 76], 67));