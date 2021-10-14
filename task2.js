
let b1=document.getElementById('button')
let count=0
b1.addEventListener("click", function () {
count+=1
    document.getElementById("button").innerText = "Clicked "+count 
});

let input1=document.getElementById('rands')

let b2=document.getElementById('convert')

b2.addEventListener("click", function () {
    
    //Curancy  values from  https://cheatsheeting.com/show.html?sheet=usd-to-zar-conversions
    document.getElementById("do").value =  input1.value*1 /14.80805 
    document.getElementById("eu").value =  input1.value*1 /17.148302
    document.getElementById("po").value =  input1.value*1 /20.2183936


    });

//found some help at https://www.javatpoint.com/how-to-create-dropdown-list-using-jav
    
function DDM(){
    let count=0
   
   //I had the problem of having just the last element "number 24" present in the drop down menu
   // I looked online at https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_select_add
   //and realized that I need to put the whole code inside the loop and it worked 
    for(i=0;i<25;i++){
        
    let list = document.getElementById("elements"); 
    option = document.createElement("option");
        option.text = "element No. "+ count;
        list.add(option)
        count+=1
    }
}
 
