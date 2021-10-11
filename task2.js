let i = 1;
function rands(){
    
    let r = document.querySelector("#rands").value;

    document.querySelector("#dollars").append( parseInt(r) * 0.067 );
    document.querySelector("#euros").append( parseInt(r) * 0.058 );
    document.querySelector("#pounds").append( parseInt(r) * 0.049 ); 
 
 }

 function drop_down(){

    for(let i = 1; i <= 25 ; i++){
        const x = document.createElement('option');
        x.append(i);
        document.querySelector("#elements").append(x);
    }

 }
 
 function C_button(){

    document.querySelector("#button").innerHTML = "Clicked "+i;
    i++;
 }