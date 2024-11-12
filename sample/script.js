
let rr=document.getElementById("result");

rr.addEventListener("click",function(){
    const num1=parseInt(document.getElementById("num1").value);
    const num2=parseInt(document.getElementById("num2").value);
    let result=num1+num2;
    document.getElementById("output").innerHTML = "The sum is: " + result;
});

