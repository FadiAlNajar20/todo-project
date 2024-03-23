'use strict';
let allQuestion = [];
let confirmMesseage = confirm("Do you want to skip the welcoming message?");

skipQuestion(confirmMesseage);

function skipQuestion(confirmMesseage) {
    if (!confirmMesseage) {
        console.log("Start the question");
        let inputName = prompt("Pleas enter your name!");

        let inputGender = prompt("Pleas enter your gender! (Male or Female)");
        if (inputGender.toLowerCase() !== 'male' && inputGender.toLowerCase() !== 'female') {
            alert("Invalid input");
        }
        let inputAge = prompt("Pleas enter your age!");
        if (inputAge <= 0) {
            alert("Your age should be postive number");
        }

        welcomeMessage(inputGender, inputName);

        valdtionQuestion("Are you an employee? (Yes/No)");
        valdtionQuestion("Do you have a Bachelor degree? (Yes/No)");
        valdtionQuestion("Do you enjoy with this question? (Yes/No)");
        console.log(allQuestion);
    } else {
        console.log("Skip the question");
    }
}

function welcomeMessage(inputGender, inputName) {
    if (inputGender.toLowerCase() == 'male') {
        alert(`Welcome Mr ${inputName}`);
    } else if (inputGender.toLowerCase() == 'female') {
        alert(`Welcome Ms ${inputName}`);
    } else {
        alert(`Welcome ${inputName}!`);
    }
}

function valdtionQuestion(question) {
    let result = prompt(question);
    if (result === "") {
        allQuestion.push("invalid");
    } else if (result.toLowerCase() !== "yes" && result.toLowerCase() !== "no") {
        allQuestion.push("invalid");
    } else {
        allQuestion.push(result);
    }
}
