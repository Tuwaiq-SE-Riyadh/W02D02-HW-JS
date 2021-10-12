
// add two number
function addNumber(){
    let result = Number(document.getElementById("num1").value) +  Number(document.getElementById("num2").value);
    let div =  document.getElementById("ansSum");
    div.innerHTML = "The value is " + result;
    
}

// Multiply two numbers
function multiplyNumber(){
    let result = Number(document.getElementById("num3").value) *  Number(document.getElementById("num4").value);
    let div =  document.getElementById("ansMultiply");
    div.innerHTML = "The value is " + result;
    
}

// Divide two numbers
function DivideNumber(){
    let result = Number(document.getElementById("num5").value) /  Number(document.getElementById("num6").value);
    let div =  document.getElementById("ansMod");
    div.innerHTML = "The value is " + result;
}

