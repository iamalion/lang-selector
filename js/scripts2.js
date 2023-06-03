function findAnswers (event) {
    event.preventDefault();
    const ans1 = document.getElementById("readID").value;
    const ans2 = document.getElementById("gameID").value;
    const ans3 = document.getElementById("drawID").value;
    const ans4 = document.getElementById("mathID").value;
    const ans5 = document.getElementById("gymID").value;
    const ans6 = document.getElementById("artID").value;
    const ans7 = document.getElementById("gamesID").value;
    const ans8 = document.getElementById("appsID").value;
    const ans9 = document.getElementById("websitesID").value;
    let result;
    
    
    document.getElementById("output").innerText = "Your recommended language is " + result +"!!!"
}

window.addEventListener("load", function () {
    const form = document.getElementById("mainForm");
    form.addEventListener("submit", findAnswers)
})
