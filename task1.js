function sum(){
    
   let num1 = document.querySelector("#num1");
   let num2 = document.querySelector("#num2");
   document.querySelector("#ansSum").append(parseInt(num1.value) + parseInt(num2.value));

}

function mul(){
  
    let num3 = document.querySelector("#num3");
    let num4 = document.querySelector("#num4");
    document.querySelector("#ansMultiply").append(parseInt(num3.value) * parseInt(num4.value));
 

}

function mod(){
   
    let num5 = document.querySelector("#num5");
    let num6 = document.querySelector("#num6");
    document.querySelector("#ansMod").append(parseInt(num5.value) % parseInt(num6.value));

}