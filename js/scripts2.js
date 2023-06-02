function addAnswers (event) {
    event.preventDefault();
    let answerValue = 0;
    let result;
    if (document.getElementsByClassName("js").checked){
        result = answerValue + 1;
    } else if (document.getElementsByClassName("csharp").checked){
        result = answerValue + 2;
    } else if (document.getElementsByClassName("js").checked){
       result = answerValue + 3;
    }
    document.getElementById("output").textContent = result
}
window.addEventListener("load", function () {
    const form = document.getElementById("mainForm");
    form.addEventListener("submit", addAnswers)
})