function Sum(){
    const num1 = document.querySelector("#num1");
    const num2 = document.querySelector("#num2");
    const num3 = document.querySelector("#ansSum")
    theSum = parseInt(num1.value) + parseInt(num2.value)
    
    num3.innerHTML = theSum
}

function mult(){
    const num1 = document.querySelector("#num3");
    const num2 = document.querySelector("#num4");
    const num3 = document.querySelector("#ansMultiply")
    theMult = parseInt(num1.value) * parseInt(num2.value)
    
    num3.innerHTML = theMult
}

function Mod(){
    const num1 = document.querySelector("#num5");
    const num2 = document.querySelector("#num6");
    const num3 = document.querySelector("#ansMod")
    theMod = parseInt(num1.value) % parseInt(num2.value)
    
    num3.innerHTML = theMod
}