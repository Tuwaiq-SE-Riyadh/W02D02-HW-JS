
// change number
function changeNumber(){
   let number = Number(document.getElementById("button").children[0].textContent);
   ++number;
   let x = document.getElementById("button").children[0];
   x.innerHTML = number;
}


// convert
function convert(){
    let value = document.getElementById("rands").value,
         dollars = document.getElementById("dollars"),
         euros = document.getElementById("euros"),
         pounds = document.getElementById("pounds");
    let todollers = Number(value) * 0.27;
    dollars.innerHTML = "the dollars value is " + todollers.toFixed(3);

    let todeuross = Number(value) * 0.23;
    euros.innerHTML = "the euros value is " + todeuross.toFixed(3);

    let topounds = Number(value) * 0.20;
    pounds.innerHTML = "the pounds value is " + topounds.toFixed(3);
}

// make loop
drop_down();

function drop_down(){
    let select = document.getElementById("elements");
    for (let i = 1; i <= 25; ++i){
        let op = document.createElement("option");
        op.setAttribute("value", i);
        op.innerHTML = i;
        select.append(op);
    }
}