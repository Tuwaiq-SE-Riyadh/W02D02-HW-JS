//addition
function add(){
const a = document.getElementById("num1").value;
const number1=parseInt(a);
const b = document.getElementById("num2").value;
const number2=parseInt(b);
document.getElementById("ansSum").innerHTML=number1 + number2;

}
//multiplication
function multi(){
    const number1 = document.getElementById("num3").value;
    const number2 = document.getElementById("num4").value;
    document.getElementById("ansMultiply").innerHTML=number1 * number2;
    }
//Mod
function mod(){
    const number1 = document.getElementById("num5").value;
    const number2 = document.getElementById("num6").value;
    document.getElementById("ansMod").innerHTML=number1 % number2;
    }