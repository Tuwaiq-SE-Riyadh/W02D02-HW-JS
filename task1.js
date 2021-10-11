let op= document.querySelectorAll("button")
op[0].addEventListener("click", function (e) {
    const val1=document.querySelector("#num1")
    let value1=parseInt(val1.value)
    const val12=document.querySelector("#num2")
    let value2=parseInt(val12.value)
    let result="the result of sum ="+(value1+value2)
    document.querySelector("#ansSum").innerHTML=result
})

op[1].addEventListener("click", function (e) {
    const val1=document.querySelector("#num3")
    let value1=parseInt(val1.value)
    const val12=document.querySelector("#num4")
    let value2=parseInt(val12.value)
    let result="the result of multiplay ="+(value1*value2)
    document.querySelector("#ansMultiply").innerHTML=result
})
op[2].addEventListener("click", function (e) {
    const val1=document.querySelector("#num5")
    let value1=parseInt(val1.value)
    const val12=document.querySelector("#num6")
    let value2=parseInt(val12.value)
    let result="the result of mod ="+(value1%value2)
    document.querySelector("#ansMod").innerHTML=result
})
