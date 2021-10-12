
let count = 0;
function fun(){
  
    count++;
document.getElementById('button').innerText= "Clicked "+count ;

}





function fun1()
{
    let rands=parseInt(document.getElementById('rands').value);

    document.getElementById('dollars').innerText=rands*0.067 +'dollars';
    document.getElementById('euros').innerText=rands*0.058+'euros';
    document.getElementById('pounds').innerText=rands*0.049+ 'pounds';

};


function myFunction()
{
    let select = document.getElementById("elements");  

    let i=0;
     for(i=1;i<=25;i++){  
         select.options[select.options.length] = new Option(i,i);  
    
    } 
}
