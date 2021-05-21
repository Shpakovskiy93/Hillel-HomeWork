let reapet;
do {
    const operatin = prompt(`select an operation \n +   -   *   /   ln   cos   sin   pow`);

    const isUnary = operatin === 'ln' || operatin === 'cos' || operatin === 'sin'
    const isBinary = operatin === '+' || operatin === '-' || operatin === '*' || operatin === '/' || operatin === 'pow'

    let number;
    let secondNumber;

    if (isUnary || isBinary) {
        number = +prompt('Enter the number');
        while(Number.isNaN(number)){
            number = +prompt('Repeat the number');
        }
        if (isBinary) {
            secondNumber = +prompt('Enter the second number');
            while(Number.isNaN(secondNumber)) {
                secondNumber = +prompt('Repeat the second number');
            }
        }
    }

    switch(operatin) {
        case '+':
            alert(number + secondNumber);
        break;
        case '-':
            alert(number - secondNumber);
        break;
        case '*':
            alert(number * secondNumber);
        break;
        case '/':
            alert(number / secondNumber);
        break;
        case 'ln':
            alert(Math.log(number));
        break;
        case 'cos':
            alert(Math.cos(number));
        break;
        case 'sin':
            alert(Math.sin(number));
        break;
        case 'pow':
            alert(Math.pow(number, secondNumber));
        break;
        default:
            alert('incorect operation');
        break;
    }

    repeat = confirm('do you want yet calculate ?');

} while(repeat)

alert('Goodbye!')