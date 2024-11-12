
let output = document.getElementById("output");

let square= document.getElementById("square");
let cube= document.getElementById("cube");
    square.addEventListener("click", function() {

        let number = parseInt(document.getElementById("input").value);
        output.innerHTML = number*number;
    });
    cube.addEventListener("click", function() {
        let number = parseInt(document.getElementById("input").value);
        output.innerHTML = number*number*number;
    });