// number of times a `button` has been clicked
let count = 0;
function clicks() {
    let btn = document.getElementById("button");
    count++;
    btn.innerText = "Clicked " + count;
}

// function to convert rands into dollars, euros and pounds
function convertRands(){
    let rand = document.getElementById("rands").value;
    let dolar = document.getElementById("dollars").innerHTML =  parseInt(rand) * 0.066 + " Dollars";
    ;
    let euro = document.getElementById("euros").innerHTML =  parseInt(rand) * 0.057 + " euros";;
    let pounds = document.getElementById("pounds").innerHTML =  parseInt(rand) * 0.049 + " pounds";;
}



  const myOptions = document.querySelector("#elements");
  // drop-down menu function
  function dropDown() {
    for(let i = 1; i <= 25; i++){
      const option = document.createElement("option");
      option.innerText= "option " + i;
      myOptions.append(option);
    }
  }
// call the function
dropDown();
  