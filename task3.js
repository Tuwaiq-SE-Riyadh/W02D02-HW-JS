const button = document.querySelector("#button")

let count = 0

button.addEventListener("click",function(){
    count ++;
    button.innerHTML="Clicked "+ count
})

const convert = document.querySelector("#convert")

let dollars = document.querySelector("#dollars")

let euros = document.querySelector("#euros")

let pounds = document.querySelector("#pounds")

convert.addEventListener("click",function(){

    let rands=document.querySelector('#rands').value
    document.querySelector('#rands').innerHTML=rands

    dollars = parseInt(rands)*0.067+" dollar"

    document.querySelector('#dollars').innerHTML=dollars

    euros = parseInt(rands)*0.058+" euros"

    document.querySelector('#euros').innerHTML=euros

    pounds = parseInt(rands)*0.049+" pounds"

    document.querySelector('#pounds').innerHTML=pounds

})