//button counter
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
  })();
  
  function myFunction(){
    document.getElementById("button").innerHTML = "Clicked "+add();
  } 
//convert currency
function convert(){
    
    const a=document.getElementById("rands").value;
    const number1=parseInt(a);
    let dollar=number1 * 3.7504;
    let euros=number1* 4.35;
    let pounds=number1 * 5.12;
    document.getElementById("dollars").innerText=dollar;
    document.getElementById("euros").innerText=euros;
    document.getElementById("pounds").innerText=pounds;
   }
//drop-down menu
function select(){
    const select=document.getElementById("elements")
    
    for(i=1; i<=25 ;i++){
        let option=document.createElement('option');
        option.innerText=i;
        select.append(option);
    }
}
select();