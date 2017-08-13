

//Code to load messages into the index.html document
var message = "Special Instructions for User";

function updatePage() {
    document.getElementById('game').innerHTML = message;
}


// getting the user's name function
function getName() {
    var userName = prompt("Hi, what's your name?");
    message = "Welcome " + userName + "!" + "<br>";
    return userName;
}

var userName = getName();

updatePage();

var questionCounter = 0;   /*this will keep track of how many answers are 
correct by increasing +1 for each correct answer*/

//first question function
function firstQuestion() {
    var colorQuestion = prompt("Is my favorite color blue?");
    console.log("The answer is blue.");
    if(colorQuestion.toUpperCase() == "YES" || colorQuestion.toUpperCase() =="Y") {
    questionCounter = questionCounter + 1;
    message += "Good job " + userName + ", that is my favorite color." + "<br>";
    } else {
    message += "Sorry. Blue is indeed my favorite color, " + userName + "." + "<br>";
    }
}

firstQuestion();

updatePage();

// second question function
function secondQuestion() {
    var petQuestion = prompt("Okay, next question. Do I own a cat?"); 
    console.log("The answer is yes, I do have a cat.");
    if (petQuestion.toUpperCase() == "YES" || petQuestion.toUpperCase() == "Y") {
    questionCounter = questionCounter + 1;
    message += "Good job " + userName + ", I do have a cat named Chloe." + "<br>";
    } else {
    message += userName + ", that isn't correct. I actually do have a cat." + "<br>";
    }
}

secondQuestion();

updatePage();


//third question function
function thirdQuestion() {
    var homeQuestion = prompt("Do I want to live in Hawaii?");
    console.log("Yes, I would love to live in Hawaii.");
    if (homeQuestion.toUpperCase() == "YES" || homeQuestion.toUpperCase() == "Y") {
    questionCounter = questionCounter + 1;
    message += "You're right, that would be awesome " + userName + "." + "<br>";
    } else {
    message += "False! I would love to live in Hawaii, " + userName + "!" + "<br>";
    }
}

thirdQuestion();

updatePage();

//fourth question function
function fourthQuestion() {
    var travelQuestion = prompt("How many countries have I traveled to?");
    console.log("The answer is 7.");
    while (travelQuestion !== 7) {
    if (travelQuestion <= 6) {
    message += "Your answer is too low, " + userName + ".";
    travelQuestion = prompt("Give it another shot.");
    } 
    else if (travelQuestion >= 8) {
    message += "Your answer is too high, " + userName + ".";
     travelQuestion = prompt("Give it another shot.");
    }
    else {
    questionCounter = questionCounter + 1;
    message += "Good guess " + userName +", that's right." + "<br>";
    travelQuestion = 7;
        }
    }
}

fourthQuestion();

updatePage();

message += "You got " + questionCounter + " questions correct.";

updatePage();
