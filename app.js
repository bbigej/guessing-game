// ***** get the user's name  prompt *****
//var userName = prompt("Hi, what's your name?");
//alert("Hi " + userName + ", welcome to my page.");


//get the user's name function



function getName() {
    var userName = prompt("Hi, what's your name?");
alert("Hi " + userName + ", welcome to my page.");
return userName;
}

var userName = getName();

var questionCounter = 0;   /*this will keep track of how many answers are 
correct by increasing +1 for each correct answer*/

// *****   first question prompts *****
/*var colorQuestion = prompt("Is my favorite color blue?");
console.log("The answer is blue.");
if(colorQuestion.toUpperCase() == "YES" || colorQuestion.toUpperCase() =="Y") {
    questionCounter = questionCounter + 1;
    alert("Good job " + userName + ", that is my favorite color.");
} else {
    alert("Sorry. Blue is indeed my favorite color, " + userName + ".");
}*/

//first question function
function firstQuestion() {
var colorQuestion = prompt("Is my favorite color blue?");
console.log("The answer is blue.");
if(colorQuestion.toUpperCase() == "YES" || colorQuestion.toUpperCase() =="Y") {
    questionCounter = questionCounter + 1;
    alert("Good job " + userName + ", that is my favorite color.");
} else {
    alert("Sorry. Blue is indeed my favorite color, " + userName + ".");
    }
}
firstQuestion();

//  ***** second question prompts *****
/*var petQuestion = prompt("Okay, next question. Do I own a cat?"); 
console.log("The answer is yes, I do have a cat.");
if (petQuestion.toUpperCase() == "YES" || petQuestion.toUpperCase() == "Y") {
    questionCounter = questionCounter + 1;
alert("Good job " + userName + ", I do have a cat named Chloe.");
} else {
    alert(userName + ", that isn't correct. I actually do have a cat.");
} */

// second question function
function secondQuestion() {
var petQuestion = prompt("Okay, next question. Do I own a cat?"); 
console.log("The answer is yes, I do have a cat.");
if (petQuestion.toUpperCase() == "YES" || petQuestion.toUpperCase() == "Y") {
    questionCounter = questionCounter + 1;
alert("Good job " + userName + ", I do have a cat named Chloe.");
} else {
    alert(userName + ", that isn't correct. I actually do have a cat.");
    }
}
secondQuestion();

// ***** third question prompts *****
/*var homeQuestion = prompt("Do I want to live in Hawaii?");
console.log("Yes, I would love to live in Hawaii.");
if (homeQuestion.toUpperCase() == "YES" || homeQuestion.toUpperCase() == "Y") {
    questionCounter = questionCounter + 1;
    alert("You're right, that would be awesome " + userName + ".");
} else {
    alert("False! I would love to live in Hawaii, " + userName + "!");
}*/

//third question function
function thirdQuestion() {
var homeQuestion = prompt("Do I want to live in Hawaii?");
console.log("Yes, I would love to live in Hawaii.");
if (homeQuestion.toUpperCase() == "YES" || homeQuestion.toUpperCase() == "Y") {
    questionCounter = questionCounter + 1;
    alert("You're right, that would be awesome " + userName + ".");
} else {
    alert("False! I would love to live in Hawaii, " + userName + "!");
    }
}
thirdQuestion();

// ***** fourth question prompts *****
/*var travelQuestion = prompt("How many countries have I traveled to?");
console.log("The answer is 7.");
while (travelQuestion !== 7) {
if (travelQuestion <= 6) {
    alert("Your answer is too low, " + userName + ".");
    travelQuestion = prompt("Give it another shot.");
} 
else if (travelQuestion >= 8) {
    alert("Your answer is too high, " + userName + ".");
     travelQuestion = prompt("Give it another shot.");
}
else {
    questionCounter = questionCounter + 1;
alert("Good guess " + userName +", that's right.");
travelQuestion = 7
}
} */

function fourthQuestion() {
var travelQuestion = prompt("How many countries have I traveled to?");
console.log("The answer is 7.");
while (travelQuestion !== 7) {
if (travelQuestion <= 6) {
    alert("Your answer is too low, " + userName + ".");
    travelQuestion = prompt("Give it another shot.");
} 
else if (travelQuestion >= 8) {
    alert("Your answer is too high, " + userName + ".");
     travelQuestion = prompt("Give it another shot.");
}
else {
    questionCounter = questionCounter + 1;
alert("Good guess " + userName +", that's right.");
travelQuestion = 7
        }
    }
}

fourthQuestion();

alert("You got " + questionCounter + " questions correct.");
