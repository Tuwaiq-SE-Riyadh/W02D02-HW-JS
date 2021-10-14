 let clicks=0;
function clic(){ 
  clicks++;
  document.getElementById("clicks").innerText=clicks
}

function con(){
  const rand=document.querySelector("#rands").value;
  const number=parseInt(rand)

  let dollar=number*0.068;
  let euros=number*0.058;
  let pounds=number*0.049;

  const dol=document.querySelector('#dollars')
  dol.innerText="Converting to dollars is "+dollar;
  
  const eur =document.querySelector('#euros')
  eur.innerText="Converting to euros is "+euros;
  
  const pou=document.querySelector('#pounds')
  pou.innerText="Converting to pounds is " +pounds;
 
  };
 

 

function sle(){
const selectList = document.querySelector('#elements')
for(i=1 ;i<=25; i++) {
        let opt = document.createElement('option');
    opt.innerText = i;
    selectList.append(opt);
    
}
}

sle();
