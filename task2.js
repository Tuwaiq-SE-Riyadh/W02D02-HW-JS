function btnClick(){
    var count = 0;
    var btn = document.querySelector("#button");
  
        btn.onclick = function () {
            count++;
            btn.innerHTML = "Clicked " + count;
        }
}

function round(){
let amount = document.querySelector('#rands')

console.log(amount);

let dollar = amount.valueAsNumber * 3.75;
let euro = amount.valueAsNumber * 4.33;
let pound = amount.valueAsNumber * 5.10;
console.log(dollar);
console.log(euro);
console.log(pound);

var conv = document.querySelector("#conv");
conv.innerText = dollar +"$; " + euro + " Euro; "+ pound +"Pound"

}

    for (let i = 1; i < 26; i++) {
    const drpd = document.createElement('option')
    console.log(drpd);
    const slct = document.querySelector('#elements')
    console.log(slct);

    drpd.innerText = "option: " + i
    slct.append(drpd)
        
    }
    