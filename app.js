
//Code to load messages into the index.html document
var message = "Special Instructions for User";

function updatePage() {
    document.getElementById('game').innerHTML = message;
}

// getting the user's name function
function getName() {
    var userName = prompt("Hi, what's your name?");
    message = "Welcome " + userName + "!" + "<br><br>";
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
"<div class='right'><p>Good job " + userName + ", that is my favorite color.</p></div>" + "<br>",
"<div class='wrong'><p>Sorry. Blue is indeed my favorite color, " + userName + ".</p></div>" + "<br>",);

//question two
yesNoQuestion("Okay, next question. Do I own a cat?", 
"<div class='right'><p>Good job " + userName + ", I do have a cat named Chloe.</p></div>" + "<br>",
"<div class='wrong'><p>" + userName + ", that isn't correct. I actually do have a cat.</p></div>" + "<br>");

//question three
yesNoQuestion("Do I want to live in Hawaii?", 
"<div class='right'><p>You're right, that would be awesome " + userName + ".</p></div>" + "<br>",
"<div class='wrong'><p>False! I would love to live in Hawaii, " + userName + "!</p></div>" + "<br>",);

//question four
function fourthQuestion() {
    var travelQuestion = prompt("How many countries have I traveled to?");
    console.log("The answer is 7.");
    while (travelQuestion !== 7) {
    if (travelQuestion <= 6) {
    message += "<div class='wrong'><p>Your answer is too low, " + userName + ".</p></div>" + "<br>";
    travelQuestion = prompt("Give it another shot.");
    } 
    else if (travelQuestion >= 8) {
    message += "<div class='wrong'><p>Your answer is too high, " + userName + ".</p></div>" + "<br>";
     travelQuestion = prompt("Give it another shot.");
    }
    else {
    questionCounter = questionCounter + 1;
    message += "<div class='right'><p>Good guess " + userName +", that's right.</p></div>" + "<br>";
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
    message += "<div class='right'><p>Good guess, " + userName + ", it was lovely.</p></div>" + "<br>";
    } else {
    message += "<div class='wrong'><p>I haven't been there yet, " + userName + ".</p></div>"+ "<br>";
    }
}

fifthQuestion();

message += "<p>You answered " + questionCounter + " question(s) correctly.</p>";

updatePage();