
const sub1 = document.querySelector('#sub1')
const sub2 = document.querySelector('#sub2')
const sub3 = document.querySelector('#sub3')

sub1.addEventListener('click', addition)
sub2.addEventListener('click', multiplication)
sub3.addEventListener('click', mod)

//---------------------------------addition---------------------

function addition() {

    const input1 = Number(document.querySelector('#num1').value)
    const input2 = Number(document.querySelector('#num2').value)
    const result1 = document.querySelector('#ansSum')
    result1.innerHTML = input1 + input2;   
}

//---------------------------------multiplication ---------------------

function multiplication () {

    const input1 = Number(document.querySelector('#num3').value)
    const input2 = Number(document.querySelector('#num4').value)
    const result = document.querySelector('#ansMultiply')
    result.innerHTML = input1 * input2;   
}

//---------------------------------mod---------------------

function mod() {

    const input1 = Number(document.querySelector('#num5').value)
    const input2 = Number(document.querySelector('#num6').value)
    const result = document.querySelector('#ansMod')
    result.innerHTML = input1 % input2;   
}


