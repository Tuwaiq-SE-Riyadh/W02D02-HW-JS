const Sum = document.querySelector('#Sum');

Sum.addEventListener("click", function(){
    const x = parseInt(document.querySelector('#num1').value);
    const y = parseInt(document.querySelector('#num2').value);

    let result = x + y ;
    const ansSum = document.querySelector('#ansSum')
    ansSum.innerHTML = "<p>" + result + "</p>";
});


// multiply
const Mul = document.querySelector('#mult');
Mul.addEventListener("click", function(){
    const x1 = parseInt(document.querySelector('#num3').value);
    const y2 = parseInt(document.querySelector('#num4').value);

    let result2 = x1 * y2 ;
    const ansMultiply = document.querySelector('#ansMultiply')
    ansMultiply.innerHTML = "<p>" + result2 + "</p>";
});


// mod
const modd = document.querySelector('#modd');
modd.addEventListener("click", function(){
    const x2 = parseInt(document.querySelector('#num5').value);
    const y1 = parseInt(document.querySelector('#num6').value);

    let result = x2 % y1 ;
    const ansMod = document.querySelector('#ansMod')
    ansMod.innerHTML = "<p>" + result + "</p>";
});