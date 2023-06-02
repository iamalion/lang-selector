
let form = document.getElementById("mainForm");
form.addEventListener("submit", function(event){

function findAnswers (event) {
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
    let result;
    if (ans1 === "Reading" && ans4 === "Math" && ans7 === "Make Games"){
        result = "JavaScript"
    } else if (ans2 === "Gaming" && ans5 === "Gym" && ans8 === "Build Mobile Apps") {
        result = "C#"
    } else if (ans3 = "Drawing" && ans6 ==="Art" && ans9 === "Create Websites") {
        result = "Python"
    } else result = "Ruby"
    
    document.getElementById("output").textContent = result
}
})
window.addEventListener("load", function () {
    const form = document.getElementById("mainForm");
    form.addEventListener("submit", findAnswers)
})
