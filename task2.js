const Count = document.querySelector('#button');
let x =0;
Count.addEventListener("click", function(){
    x++;
    Count.innerHTML ="Clicked "+ x ;
});

const convert = document.querySelector("#convert");
convert.addEventListener("click", function (e) {
    const x=document.querySelector("#rands").value;
  
    document.querySelector("#dollars").innerHTML = (x*0.067) + " dollars";
    document.querySelector("#euros").innerHTML = (x*0.058) + " euros";
    document.querySelector("#pounds").innerHTML = (x*0.049) + " pounds";
  
  });


const select = document.querySelector("#elements");
    for(let i = 1; i <= 25 ; i++){
        const x = document.createElement('option');
        x.append(i);
        select.append(x);
        
    }
