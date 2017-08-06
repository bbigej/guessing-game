var userName = prompt("Hi, what's your name?");
alert("Hi " + userName + ", I hope you're ready to party.");
var colorQuestion = prompt("Is my favorite color blue?");
console.log("The answer is blue.");
if(colorQuestion == "Yes" || colorQuestion == "yes") {
    alert("Good job " + userName + ", that is my favorite color.");
} else {
    alert("Sorry. Blue is indeed my favorite color, " + userName + ".");
}
var petQuestion = prompt("Okay, next question. Do I own a cat?"); 
console.log("The answer is yes, I do have a cat.");
if (petQuestion == "Yes" || petQuestion == "yes") {
alert("Good job " + userName + ", I do have a cat named Chloe.");
} else {
    alert(userName + ", that isn't correct. I actually do have a cat.");
}
var homeQuestion = prompt("Last question: do I want to live in Hawaii?");
console.log("Yes, I would love to live in Hawaii.");
if (homeQuestion == "Yes" || homeQuestion == "yes") {
    alert("You're right, that would be awesome " + userName + ".");
} else {
    alert("False! I would love to live in Hawaii, " + userName + "!");
}
