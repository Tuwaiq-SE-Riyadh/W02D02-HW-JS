function ad(){
const n1 =document.querySelector("#num1").value;
const number1=parseInt(n1);
const n2 =document.querySelector("#num2").value;
const number2=parseInt(n2);
const s =document.querySelector("#ansSum")
s.innerHTML=number1+number2;
}


function multiplication(){
    const n1 =document.querySelector("#num3").value;
    const number1=parseInt(n1);
    const n2 =document.querySelector("#num4").value;
    const number2=parseInt(n2);
    const q=document.querySelector("#ansMultiply")
    q.innerHTML=number1*number2;}


function mod(){
    const n1=document.querySelector("#num5").value
    const number1=parseInt(n1);
    const n2 =document.querySelector("#num6").value
    const number2=parseInt(n2);
    const m=document.querySelector("#ansMod")
    m.innerHTML=number1%number2;


}
