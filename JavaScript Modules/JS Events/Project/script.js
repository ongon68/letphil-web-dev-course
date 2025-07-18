const buttons = document.querySelectorAll(".color-btn");
const resetButton = document.getElementById("reset");

// Change background color
buttons.forEach(button => {
    button.addEventListener("click", function() {
        document.body.style.backgroundColor = button.getAttribute("data-color");
    });
});

// Reset background color
resetButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
});