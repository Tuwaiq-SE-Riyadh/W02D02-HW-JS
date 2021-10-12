
let counter = 0;
function count(){

    counter+=1;

    document.getElementById('button').innerText = "Clicked "+counter;
};


function convert(){

    const num = parseInt(document.getElementById('rands').value);
    document.getElementById('dollars').innerHTML = num * 0.066+" dollars"; 
    document.getElementById('euros').innerHTML = num * 0.058+" euros";
    document.getElementById('pounds').innerHTML = num * 0.049+" pounds";
}

const select = document.querySelector("select");

for(let i=1; i<= 25; i++){
const op = document.createElement("option"); 
op.innerText = i;
select.append(op);

}