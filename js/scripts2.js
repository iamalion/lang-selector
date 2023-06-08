function findAnswers (event) {
    event.preventDefault();
    const hobby = document.getElementById("hobbyID").value;
    const school = document.getElementById("schoolID").value;
    const skills = document.getElementById("skillsID").value;
    let result;
    if (hobby === "Reading" && school === "Math" && skills === "Make fun games"){
        result = "JavaScript"
    } else if (hobby === "Gaming" && school === "Gym" && skills === "Build useful mobile apps"){
        result = "C#"
    } else if (hobby === "Drawing" && school === "Art" && skills === "Create beautiful websites"){
        result = "C/C++"
    } else {
        result = "Python"
    }
    
    document.querySelector("h2#results").removeAttribute("class")
    document.getElementById("output").innerText = "Your recommended language is " + result +"!!!"
}   

window.addEventListener("load", function () {
    const form = document.getElementById("mainForm");
    form.addEventListener("submit", findAnswers)
})
