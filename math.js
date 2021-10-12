function sum(){
    let sum = 0
    let number1 = document.querySelector('#num1');
    console.log(typeof(number1.valueAsNumber));
    let number2 = document.querySelector('#num2');
    console.log(number2.value);

    let n1 =number1.valueAsNumber
    let n2 = number2.valueAsNumber
     sum = (n1+n2)
    let result = document.querySelector('#result');
    console.log(result);
    result.innerText = sum;
    console.log(result);
}

function multi(){
    let multi = 0
    let number1 = document.querySelector('#num3');
    let number2 = document.querySelector('#num4');

    let n1 =number1.valueAsNumber
    let n2 = number2.valueAsNumber
    multi = (n1*n2)
    let result = document.querySelector('#ansMultiply');
    result.innerText = multi;
}

function mod(){
    let multi = 0
    let number1 = document.querySelector('#num5');
    let number2 = document.querySelector('#num6');

    let n1 =number1.valueAsNumber
    let n2 = number2.valueAsNumber
    multi = (n1%n2)
    let result = document.querySelector('#ansMod');
    result.innerText = multi;
}
