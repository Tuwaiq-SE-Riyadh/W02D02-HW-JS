const button1 = document.querySelector('#button1')


let ansSum=document.querySelector('#ansSum')

button1.addEventListener('click',function(){
    let num1=document.querySelector('#num1').value
document.querySelector('#num1').innerHTML=num1

let num2=document.querySelector('#num2').value
document.querySelector('#num2').innerHTML=num2

ansSum = parseInt(num1)+parseInt(num2)

document.querySelector('#ansSum').innerHTML=ansSum
    
})


const button2 = document.querySelector('#button2')

let ansMultiply=document.querySelector('#ansMultiply')

button2.addEventListener('click',function(){
    let num3=document.querySelector('#num3').value
document.querySelector('#num3').innerHTML=num3

let num4=document.querySelector('#num4').value
document.querySelector('#num4').innerHTML=num4

ansMultiply = parseInt(num3)*parseInt(num4)

document.querySelector('#ansMultiply').innerHTML=ansMultiply
    
})


const button3 = document.querySelector('#button3')

let ansMod=document.querySelector('#ansMod')

button3.addEventListener('click',function(){
    let num5=document.querySelector('#num5').value
document.querySelector('#num5').innerHTML=num5

let num6=document.querySelector('#num6').value
document.querySelector('#num6').innerHTML=num6

ansMod = parseInt(num5)%parseInt(num6)

document.querySelector('#ansMod').innerHTML=ansMod
    
})