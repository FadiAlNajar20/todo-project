'use strict';

let confirmMesseage = confirm("Do you want to skip the welcoming message?");


if(!confirmMesseage){
    
let inputName = prompt("Pleas enter your name!");

let inputGender = prompt("Pleas enter your gender! (Male or Female)");
console.log(inputGender)
if(inputGender.toLowerCase() !== 'male' && inputGender.toLowerCase() !== 'female'){
    alert("Invalid input");
}

let inputAge = prompt("Pleas enter your age!");
if(inputAge <= 0){
    alert("Your age should be postive number");
}
if(inputGender.toLowerCase() == 'male'){
    alert(`Welcome Mr ${inputName}`);
}else if(inputGender.toLowerCase() == 'female'){
    alert(`Welcome Ms ${inputName}`);
}else {
    alert(`Welcome ${inputName}!`);
}
}