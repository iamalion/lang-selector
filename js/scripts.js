//Business logic
let js = 0;
let csharp = 0;
let css = 0;

function addUp(answer){
    if (selection === js){
        js += 1
    } else if (selection === csharp) {
        csharp +=1
    } else if (selection === css) {
        css +=1
    }
}


//UI logic
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
    }
    function result (ans1,ans2,ans3,ans4,ans5,ans6,ans7,ans8,ans9){
        return ans1+ans2+ans3+ans4+ans5+ans6+ans7+ans8+ans9;

    }; 
    
    document.getElementById("output").innerText = result

    window.addEventListener("load", function (){
        const form = document.getElementById("mainForm")
        form.addEventListener("submit", addAnswers)
    })