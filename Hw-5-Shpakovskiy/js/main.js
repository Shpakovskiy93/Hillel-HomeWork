function fillArray(n) {
    do {
        let num = +prompt('number ?');
        while(Number.isNaN(num)) {
            num = +prompt('only number !');
        }
        arr.push(num);
    }while(arr.length < n);
}

function sortArray(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

function printArray() {
    alert(arr);
    console.log(arr);
}

let langthArr = +prompt('Enter array lengtgh \n min-5,  max-20');

while(Number.isNaN(langthArr) || langthArr < 5 || langthArr > 20) {
    langthArr = +prompt('repeat!');
}

let arr = [];

fillArray(langthArr);

arr.sort(sortArray);

printArray();