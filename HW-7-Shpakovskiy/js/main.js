
const CHOICE__SORT_DESCENDING = 1;
const CHOICE__SORT_ASCENDING = 2;
const CHOICE__EVEN = 3;
const CHOICE__ADD = 4;
const CHOICE__SUM = 5;
const CHOICE__ARITHMETIC_MEAN = 6;
const CHOICE__GREATEST_NUM = 7;
const CHOICE__SMALLEST_NUM = 8;

function getArrayFromUser(message, separator = ' ') {
    let result = prompt(message);
    return result
        .trim()
        .split(separator)
        .map(e => +e)
        .filter(e => !Number.isNaN(e));
}

function getMenuResult() {
    const menu = `
    1 sorting the array in descending order
    2 sorting the array by ascending order
    3 even numbers
    4 add numbers
    5 sum of all numbers
    6 arithmetic mean
    7 greatest number
    8 smallest number`;

    let userChice;

    do {
        userChice =  +prompt(menu);
    } while(!userChice || userChice > 8 || userChice < 1);
    return userChice;
}


function processUserChoice(choice, array, dividet) {
    let anser;
    switch(choice) {
        case CHOICE__SORT_DESCENDING:
            anser = array.sort((a, b) => b - a).join(dividet);
        break;
        case CHOICE__SORT_ASCENDING:
            anser = array.sort((a, b) => a - b).join(dividet);
        break;
        case CHOICE__EVEN:
            anser = array.filter(e => e % 2 === 0).join(dividet);
        break;
        case CHOICE__ADD:
            anser = array.filter(e => e % 2 !== 0).join(dividet);
        break;
        case CHOICE__SUM:
            anser = array.reduce((acamuletor, e) => acamuletor + e);
        break;
        case CHOICE__ARITHMETIC_MEAN:
            anser = array.reduce((partialSum, a) => partialSum + a, 0) / array.length;
        break;
        case CHOICE__GREATEST_NUM:
            anser = Math.max(...array);
        break;
        case CHOICE__SMALLEST_NUM:
            anser = Math.min(...array);
        break;
    }
    return anser;
}

function showUserResult(result) {
    alert(result);
    console.log(result);
}

(function () {
    let newArray = true;
    let reapet = true;
    let userArray;
    let dividet;

    do {
        if (newArray) {
            userArray = getArrayFromUser('Please, insert  numbers separated by a space');
        }
        let choice = getMenuResult();

        if (choice > 0 && choice < 5) {
            dividet = prompt('dividet ?')
        }

        let result = processUserChoice(choice, userArray, dividet);
        
        showUserResult(result);

        reapet = confirm('reapet?')

        if (reapet) {
            newArray = confirm('new array?')
        }

    } while(reapet)
})();