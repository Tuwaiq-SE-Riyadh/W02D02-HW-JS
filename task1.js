
let input1=document.getElementById('num1')
let input2=document.getElementById('num2')

let input3=document.getElementById('num3')
let input4=document.getElementById('num4')

let input5=document.getElementById('num5')
let input6=document.getElementById('num6')



 
let b1=document.getElementById('num03')
let b2=document.getElementById('num05')
let b3=document.getElementById('num07')





b1.addEventListener("click", function () {

//Resources https://stackoverflow.com/questions/4841373/how-to-force-js-to-do-math-instead-of-putting-two-strings-together
//https://stackoverflow.com/questions/15383765/javascript-viewing-object-htmlinputelement
    document.getElementById("num003").value = (input1.value*1)+(input2.value*1)
});

b2.addEventListener("click", function () {
    document.getElementById("num005").value = (input3.value*1)*(input4.value*1)
});

b3.addEventListener("click", function () {
    document.getElementById("num007").value = (input5.value*1)%(input6.value*1)
});






