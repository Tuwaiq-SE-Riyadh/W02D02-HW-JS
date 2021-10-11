const button = document.querySelector('#button')
const convert = document.querySelector('#convert')
let count=0

button.addEventListener("click", counter)
convert.addEventListener("click", converting)

//-------------------counts----------------------------------------

function counter(){

    button.innerHTML = ++count   
}

//----------------------convert----------------------------------------

function converting() {

 const rands = Number(document.querySelector('#rands').value)
 const dollars = document.querySelector('#dollars')
 const euros  = document.querySelector('#euros ')
 const pounds = document.querySelector('#pounds')

 dollars.innerHTML = " dollars = "+ (rands * 0.067)
 euros .innerHTML = " euros  = "+ (rands * 0.058)
 pounds.innerHTML = " pounds = "+ (rands *0.049)
 
}

//----------------------drop-down----------------------------------------

for (let i = 0; i<= 10; i++){
    let opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = "Option " + i;
    document.getElementById("elements").appendChild(opt);
}