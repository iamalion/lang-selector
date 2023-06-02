//Business logic
let js = 1
let csharp = 2
let css = 3

function addUp (num1,num2,num3,num4,num5,num6,num7,num8,num9){
    return (num1+num2+num3+num4+num5+num6+num7+num8+num9)
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
    let result; 
    result = addUP(ans1,ans2,ans3,ans4,ans5,ans6,ans7,ans8,ans9);
    document.getElementById("output").innerText = result
}