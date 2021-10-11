


// Q1
let count =0;
document.querySelector("#button").addEventListener("click", function (e) {
  count++
  document.querySelector("#out").innerHTML="the number of cliked"+count;

});


// Q2
document.querySelector("#convert").addEventListener("click", function (e) {
  const input=document.querySelector("#rands").value;

  document.querySelector("#dollars").innerHTML=(input*0.067) +" dollars";
  document.querySelector("#euros").innerHTML=(input*0.058)+" euros";
  document.querySelector("#pounds").innerHTML=(input*0.049)+" pounds";

});


// Q3
const sele=document.querySelector("select")
  for (let i=0 ;i<25;i++){
   const op=document.createElement("option")
   op.innerText=i
   op.value=i
   sele.append(op)
   
}