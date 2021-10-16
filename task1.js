

function sum() {
let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;
document.getElementById("ansSum").innerHTML = parseInt(num1) + parseInt(num2);

}

function multiply() {
    let num3 = document.getElementById("num3").value;
    let num4 = document.getElementById("num4").value;
    document.getElementById("ansMultiply").innerHTML = parseInt(num3) * parseInt(num4);
    
}

function modulus() {
    let num5 = document.getElementById("num5").value;
    let num6 = document.getElementById("num6").value;
    document.getElementById("ansMod").innerHTML = parseInt(num5) % parseInt(num6);
    
    }