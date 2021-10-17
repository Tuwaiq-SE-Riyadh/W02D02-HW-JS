// ## Dom Task1
// Start of with Modifying the basic HTML page called math.html
// - Create a JavaScript ﬁle called task1.js.

// - Modify the HTML and write the JavaScript necessary to create a web page that allows a user to do some 
//basic mathematical computations(addition, multiplication and mod).

// - The user should be able to enter numbers and press on a button to show the results of the calculation.
// white_check_mark
// eyes
// raised_hands

const sumB = document.querySelector('#sum')
const multipB = document.querySelector('#multiplication')
const modB = document.querySelector('#mod')
let ansSum = document.querySelector('#ansSum');
let ansMul = document.querySelector('#ansMultiply');
let ansMod = document.querySelector('#ansMod');

sumB.addEventListener('click',function(){
        let num1=document.querySelector('#num1').value
        let num2=document.querySelector('#num2').value

        ansSum = parseInt(num1)+parseInt(num2)
        document.querySelector('#ansSum').innerHTML=ansSum
    
})

// ansMultiply
multipB.addEventListener('click',function(){
        const num3 = document.querySelector('#num3').value
        const num4 = document.querySelector('#num4').value

        ansMul = parseInt(num3)*parseInt(num4)
        document.querySelector('#ansMultiply').innerHTML=ansMul
    
})
modB.addEventListener('click',function(){
        const num5 = document.querySelector('#num5').value
        const num6 = document.querySelector('#num6').value


        ansMod = parseInt(num5)%parseInt(num6)
        document.querySelector('#ansMod').innerHTML=ansMod
    
})