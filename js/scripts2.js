
let form = document.getElementById("mainForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    function findAnswers (event) {
    const ans1 = document.querySelector("input");
    const ans2 = document.querySelector("input#gameID").value;
    const ans3 = document.querySelector("input#drawID").value;
    const ans4 = document.querySelector("input");
    const ans5 = document.querySelector("input#gymID").value;
    const ans6 = document.querySelector("input#artID").value;
    const ans7 = document.querySelector("input");
    const ans8 = document.querySelector("input#appsID").value;
    const ans9 = document.querySelector("input#websitesID").value;
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
