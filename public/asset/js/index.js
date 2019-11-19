// wait for HTML to finish loading before loading any DOM;
document.addEventListener("DOMContentLoaded", function() {

    console.log("DOM Loaded");

    const cardio = document.getElementById("cardio");
    cardio.addEventListener("submit", function (event) {
       if (cardio.checkValidity() === false) {
           event.preventDefault();
           event.stopPropagation();
       }
       console.log("checked");
       cardio.classList.add("was-validated");
    });

    const strength = document.getElementById("strength");
    strength.addEventListener("submit", function (event) {
        if (strength.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        console.log("checked");
        strength.classList.add("was-validated");
    });

    document.getElementById("cardio-select").addEventListener("click", function () {
        document.getElementById("cardio").style.display = "block";
        document.getElementById("strength").style.display = "none";
    });
    document.getElementById("strength-select").addEventListener("click", function () {
        document.getElementById("strength").style.display = "block";
        document.getElementById("cardio").style.display = "none";
    });

    document.getElementById("cardio-select-display").addEventListener("click", function () {
        document.getElementById("cardio-display").style.display = "block";
        document.getElementById("strength-display").style.display = "none";
    });
    document.getElementById("strength-select-display").addEventListener("click", function () {
        document.getElementById("strength-display").style.display = "block";
        document.getElementById("cardio-display").style.display = "none";
    });
});