// Create a function which counts and displays the number of times a button has been clicked.
function countsClickedButton()
{
    let btn = document.querySelector("#button")
    let count = btn.innerText
    count = count.charAt(count.length-1)
    count = Number(count)
    count++
    btn.innerHTML=count
    
    // count =  count.charAt(count.length-1)
    // count = Number(count)
    // count ++
    // btn.innerHTML="Clicked " + count ;

}

// Create a function to convert rands into dollars, euros and pounds.
function convertRandsToDollarsEurosPounds()
{
    const rands = document.querySelector('#rands')

        let dollarsValue = rands.value*0.067;
        let eurosValue = rands.value*0.058;
        let poundsValue = rands.value*0.049;

        document.querySelector('#dollars').innerText=dollarsValue
        document.querySelector('#euros').innerText=eurosValue
        document.querySelector('#pounds').innerText=poundsValue
}


// Create a function which creates a drop-down menu with 25 option elements and add it to the HTML page you have created. Each option element should display the number of the option. Use a loop.
// I get helped from this post (https://stackoverflow.com/questions/8674618/adding-options-to-select-with-javascript)
function dropDownMenu()
{
    select = document.querySelector('#elements');

    for (let i = 1; i<= 20; i++)
    {
        let opt = document.createElement('option');
        opt.value ="Option: "+ i;
        opt.innerHTML ="Option: "+ i;
        select.appendChild(opt);
    }
}

dropDownMenu()