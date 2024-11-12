let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function () {
        let value = this.innerText;
        if (value !== "=" && value !== "C") {
            input.value += value;
        } 
        if (value === "=") {
            try {
                input.value = eval(input.value); 
            } catch (error) {
                input.value = "Error"; 
            }
        }
        if (value === "C") {
            input.value = "";
        }
    });
});
