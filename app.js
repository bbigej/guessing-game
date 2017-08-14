
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

/*this will keep track of how many answers are 
correct by increasing +1 for each correct answer*/
var questionCounter = 0;  

//function for yes/no questions
function yesNoQuestion(question, rightAnswer, wrongAnswer) {
    var response = prompt(question);
    if (response.toUpperCase() == "YES" || response.toUpperCase() == "Y") {
    questionCounter = questionCounter + 1;
    message += rightAnswer;
    } else {
    message += wrongAnswer;
    }
}

//question one
yesNoQuestion("Is my favorite color blue?", 
"Good job " + userName + ", that is my favorite color." + "<br>",
"Sorry. Blue is indeed my favorite color, " + userName + "." + "<br>",);

//question two
yesNoQuestion("Okay, next question. Do I own a cat?", 
"Good job " + userName + ", I do have a cat named Chloe." + "<br>",
userName + ", that isn't correct. I actually do have a cat.");

//question three
yesNoQuestion("Do I want to live in Hawaii?", 
"You're right, that would be awesome " + userName + "." + "<br>",
"False! I would love to live in Hawaii, " + userName + "!" + "<br>",);

//question four
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

var fifthQuestionAnswers = ["France", "England", "Thailand", "Taiwan",
"Canada", "Netherlands"]

//question 5
function fifthQuestion() {
    var response = prompt("Where else in the world have I been?");
    if (response == fifthQuestionAnswers[0] ||
        response == fifthQuestionAnswers[1] ||
        response == fifthQuestionAnswers[2] ||
        response == fifthQuestionAnswers[3] ||
        response == fifthQuestionAnswers[4] ||
        response == fifthQuestionAnswers[5])    {
    questionCounter = questionCounter + 1;
    message += "Good guess, " + userName + ", it was lovely."+ "<br>";
    } else {
    message += "I haven't been there yet, " + userName + "."+ "<br>";
    }
}

fifthQuestion();

message += "You answered " + questionCounter + " questions correctly.";

updatePage();