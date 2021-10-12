let x = 0
function Times(){
    const btn = document.querySelector("#button") 
    if (x===0){
   
   btn.innerHTML = "Clicked "+(x=x+1);
    }
    else {
        btn.innerHTML = "Clicked "+(x=x+1);   
    }
}


function changeCur(){
    const rand = document.querySelector("#rands")
    const toDoll = document.querySelector("#dollars")
    const toEuro = document.querySelector("#euros")
    const toPound = document.querySelector("#pounds")
    chnToDoll = parseFloat(rand.value) * 0.067
    chnToEuro = parseFloat(rand.value) * 0.058
    chnToPounds = parseFloat(rand.value) * 0.049

    toDoll.innerHTML = chnToDoll
    toEuro.innerHTML = chnToEuro
    toPound.innerHTML = chnToPounds
}


    const dropDown = document.querySelector("#elements")
    
    // const opTxt = document.createTextNode("")
    for (let i =0 ; i<=25;i++){
        const op = document.createElement("option")
        const opTxt = document.createTextNode(i);
        op.appendChild(opTxt);
        dropDown.appendChild(op)

    }
    