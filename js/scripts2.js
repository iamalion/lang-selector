
let form = document.getElementById("mainForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    function findAnswers (event) {
        if (ans1.checked && ans4.checked && ans7.checked){
            result = "JavaScript"
        } else if (ans2 === "Gaming" && ans5 === "Gym" && ans8 === "Build Mobile Apps") {
            result = "C#"
        } else if (ans3 = "Drawing" && ans6 ==="Art" && ans9 === "Create Websites") {
            result = "Python"
        } else result = "Ruby"
    const ans1 = document.getElementById("readID");
    const ans2 = document.getElementById("gameID");
    const ans3 = document.getElementById("mathID");
    const ans4 = document.getElementById("input");
    const ans5 = document.getElementById("gymID");
    const ans6 = document.getElementById("artID");
    const ans7 = document.getElementById("gamesID");
    const ans8 = document.getElementById("appsID");
    const ans9 = document.getElementById("websitesID");
    let result;
    if (ans1.checked && ans4.checked && ans7.checked){
        result = "JavaScript"
    } else if (ans2 === "Gaming" && ans5 === "Gym" && ans8 === "Build Mobile Apps") {
        result = "C#"
    } else if (ans3 = "Drawing" && ans6 ==="Art" && ans9 === "Create Websites") {
        result = "Python"
    } else result = "Ruby"
    
    document.getElementById("output").textContent = "Your recommended language is" + result
}
})
window.addEventListener("load", function () {
    const form = document.getElementById("mainForm");
    form.addEventListener("submit", findAnswers)
})
