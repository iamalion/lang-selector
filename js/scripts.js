//Business logic
window.onload = function () {
    console.log("Script is executing!");



//UI logic
let form = document.getElementById("mainForm");
form.onsubmit = function addAnswers(event) {
    event.preventDefault();
        const ans1 = parseInt(document.querySelector("input#readID").value);
        const ans2 = parseInt(document.querySelector("input#gameID").value);
        const ans3 = parseInt(document.querySelector("input#drawID").value);
        const ans4 = parseInt(document.querySelector("input#mathID").value);
        const ans5 = parseInt(document.querySelector("input#gymID").value);
        const ans6 = parseInt(document.querySelector("input#artID").value);
        const ans7 = parseInt(document.querySelector("input#gamesID").value);
        const ans8 = parseInt(document.querySelector("input#appsID").value);
        const ans9 = parseInt(document.querySelector("input#websitesID").value);
        const sum = ans1+ans2+ans3+ans4+ans5+ans6+ans7+ans8+ans9;
        let result;
        if (sum <5 && sum >2) {
            result = "JavaScript";
        } else if (sum <8 && sum >4) {
            result = "C#";
        } else if (sum <10 && sum >7) {
            result = "CSS";
        }
    document.getElementById("output").innerText = result;
    }
    window.addEventListener("load", function () {
        const form = document.getElementById("mainForm");
        form.addEventListener("submit", addAnswers)
    })
}