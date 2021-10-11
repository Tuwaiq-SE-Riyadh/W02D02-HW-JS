// addition
function sumFunction()
{
    const num1 = document.querySelector('#num1').value
    const num2 = document.querySelector('#num2').value
    let result = parseInt(num1) + parseInt(num2) 
    document.querySelector('#ansSum').innerHTML=result
    
}

// multiplication
function multFunction()
{
    const num3 = document.querySelector('#num3').value
    const num4 = document.querySelector('#num4').value
    let result = parseInt(num3) * parseInt(num4) 
    document.querySelector('#ansMultiply').innerHTML=result
    
}

// mod
function modFunction()
{
    const num5 = document.querySelector('#num5').value
    const num6 = document.querySelector('#num6').value
    let result = parseInt(num5) % parseInt(num6) 
    document.querySelector('#ansMod').innerHTML=result
    
}