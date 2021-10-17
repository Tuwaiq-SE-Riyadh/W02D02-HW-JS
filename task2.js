// - Create a function which counts and displays the number of times a `button` has been clicked.

const button = document.querySelector('button')

let clicked = 0;
button.addEventListener("click", function (e) {
    clicked++
    console.log("The number of times a `button` has been clicked: "+clicked);
    button.innerText = "Clicked "+clicked
});

// - Create a function to convert rands into dollars, euros and pounds.
const convertB = document.querySelector("#convert")
convertB.addEventListener("click", function (e) {
    const rands = document.querySelector('#rands').value
    dollars = parseInt(rands)*0.067
    document.querySelector('#dollars').innerHTML="dollars: "+dollars+" $"
    
    euros = parseInt(rands)*0.058
    document.querySelector('#euros').innerHTML="euros: "+euros+" €"
    
    pounds = parseInt(rands)*0.049
    document.querySelector('#pounds').innerHTML="pounds: "+pounds+" £"
});

// - Create a function which creates a drop-down menu with 25 option elements and add it to the HTML page 
// you have created. Each option element should display the number of the option. `Use a loop`.

let select = document.querySelector("#elements")
for (let i = 1; i <= 25; i++) {
    var option = document.createElement("option");
    option.text = "option" + i 
    select.append(option)
}