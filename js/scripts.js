//Business logic
window.onload = function () {
    console.log("Script is executing!");
}
//UI logic
let form = document.getElementById("mainForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const numericValue = {
        hobbies: {
            js: 1,
            csharp: 2,
            css: 3
        },
        school: {
            js: 1,
            csharp: 2,
            css: 3,
        },
        skills: {
            js: 1,
            csharp: 2,
            css: 3,
        }
    };
    function addAnswers(event) {
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
    if (result < 5 && result > 2) {
    output = "JavaScript";
    } else if (result < 8 && result > 4) {
    output = "C#";
    } else if (result < 10 && result > 7) {
    output = "CSS";
    }
    document.getElementById("output").textContent = "Your recommended language is: " + output;
    };
    window.addEventListener("load", function () {
        const form = document.getElementById("mainForm");
        form.addEventListener("submit", addAnswers)
    });
})
