var userName = prompt("Hi, what's your name?");
alert("Hi " + userName + ", I hope you're ready to party.");

var questionCounter = 0   /*this will keep track of how many answers are 
correct by increasing +1 for each correct answer*/

//first question
var colorQuestion = prompt("Is my favorite color blue?");
console.log("The answer is blue.");
if(colorQuestion == "Yes" || colorQuestion == "yes") {
    questionCounter = questionCounter + 1
    alert("Good job " + userName + ", that is my favorite color.");
} else {
    alert("Sorry. Blue is indeed my favorite color, " + userName + ".");
}
//second question
var petQuestion = prompt("Okay, next question. Do I own a cat?"); 
console.log("The answer is yes, I do have a cat.");
if (petQuestion == "Yes" || petQuestion == "yes") {
    questionCounter = questionCounter + 1
alert("Good job " + userName + ", I do have a cat named Chloe.");
} else {
    alert(userName + ", that isn't correct. I actually do have a cat.");
}
//third question
var homeQuestion = prompt("Do I want to live in Hawaii?");
console.log("Yes, I would love to live in Hawaii.");
if (homeQuestion == "Yes" || homeQuestion == "yes") {
    questionCounter = questionCounter + 1
    alert("You're right, that would be awesome " + userName + ".");
} else {
    alert("False! I would love to live in Hawaii, " + userName + "!");
}
//fourth question
var travelQuestion = prompt("How many countries have I traveled to?");
console.log("The answer is 7.");
if (travelQuestion <= 6) {
    alert("Your answer is too low, " + userName + ".");
} 
else if (travelQuestion >= 8) {
    alert("Your answer is too high, " + userName + ".");
}
else {
    questionCounter = questionCounter + 1
alert("Good guess " + userName +", that's right.");
}

alert("You got " + questionCounter + " questions correct.")
