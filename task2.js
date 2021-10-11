//Create a function which counts and displays the number of times a button has been clicked.
let count = 0;

function cal() {
    count++
    document.getElementById('button').innerHTML = "clickeds " + count
}


//Create a function to convert rands into dollars, euros and pounds.
function convert() {
    let r = parseInt(document.getElementById('rands').value)

    document.getElementById('dollars').innerText = r * 0.066 + " dollars"
    document.getElementById('euros').innerText = r * 0.057 + " euros"
    document.getElementById('pounds').innerText = r * 0.049 + " pounds"


}


//Create a function which creates a drop-down menu with 25 option elements and add 
//it to the HTML page you have created. Each option element should display
// the number of the option. Use a loop.
const body = document.querySelector('body')

function op() {
    // let celcet = document.createElement('select')
    // body.append('celcet')
    let opt
    let selectOp = document.getElementById('elements')
    for (let i = 1; i <= 25; i++) {
        opt = document.createElement("option");
        opt.text = 'option ' + i
        selectOp.add(opt)
    }
}