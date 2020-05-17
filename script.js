let timeLeft = 60;
//Triggers start button
let buttonQuiz = document.getElementById("quizBtn");
buttonQuiz.addEventListener("click", respondClick);
let timerQuiz = document.getElementById("countdown");
//question and answer variables
const questArray = [
  "JavaScript was invented in 5 days. True or False?",
  "JavaScript is a cool language to learn. True or False?",
  "HTML stands for Hyper Text Made Up Language, True or False?",
  "LET is preferable to setting variables with VAR, True or False?",
  "JQuery doesn't require a link to a script library, True or False?",
  "Objects are very powerful parts of JavaScript, True or False?",
  "The opposite of stringify is objectify, True or False?",
  "The best way to learn coding is a mix of theory and practice, True or False?",
  "Java and Javascript are fundamentally the same, True or False?",
  "Bootstrap is frequently used to quickly style and format webpages, True or False?",
  "It is best to avoid event.preventdefault when involving forms in your JavaScript, True or False?",
  "JQuery is still used and you're likely to encounter it when working with web pages, True or False?",
  "Function, Global, Block and Sniper are examples of scope in JavaScript, True or False?",
  "You answered all the questions!",
];
const ansArray = [
  "False",
  "True",
  "False",
  "True",
  "False",
  "True",
  "False",
  "True",
  "False",
  "True",
  "False",
  "True",
  "False",
];
let userAnswers = [];
let scoreCard = 0;

let question = document.getElementById("quesTions");
question.innerHTML = "Questions will appear here.";
let answerTrue = document.querySelector("#ansTrue");
let answerFalse = document.querySelector("#ansFalse");

// function below (started by begin code quiz) sets time, starts countdown timer, triggers Question function and Quiz End
var timeInterval;

function respondClick() {
  buttonQuiz.disabled = "true";
  console.log("clicked");
  questionsQuiz(); // calls questions for user to answer
  timeInterval = setInterval(function () {
    timerQuiz.textContent = timeLeft + " seconds remaining";
    timeLeft--; // this counts the time down
    if (timeLeft <= 0) {
      timerQuiz.textContent = "Out of Time!!!";
      endQuiz();
    }
  }, 1000);
}
let questNum = 0;

function questionsQuiz() {
  event.preventDefault();
  if (questArray[questNum] != undefined) {
    // check here
    question.innerHTML = questArray[questNum];
    console.log("questions happening");
  } else {
    endQuiz();
    return;
  }
}

// below establish function to be called after user select an answer
answerTrue.addEventListener("click", function () {
  event.preventDefault();
  userAnswers.push("True");
  answerTrue.disabled = true; //block clicks
  answerFalse.disabled = true;
  console.log(userAnswers, "user answer array");

  if (userAnswers[questNum] !== ansArray[questNum]) {
    console.log("answered incorrect");
    timeLeft -= 5;
    answerTrue.disabled = false; //unblock clicks
    answerFalse.disabled = false;
    ++questNum;
    questionsQuiz();
  } else {
    ++scoreCard;
    console.log(scoreCard);
    answerTrue.disabled = false; //unblock clicks
    answerFalse.disabled = false;
    console.log("answered correct");
    ++questNum;
    questionsQuiz();
  }
});

answerFalse.addEventListener("click", function () {
  event.preventDefault();
  userAnswers.push("False");
  answerTrue.disabled = true; //block clicks
  answerFalse.disabled = true;
  console.log(userAnswers, "user answer array");

  if (userAnswers[questNum] !== ansArray[questNum]) {
    console.log("answered incorrect");
    timeLeft -= 5;
    answerTrue.disabled = false; //unblock clicks
    answerFalse.disabled = false;
    ++questNum;
    questionsQuiz();
  } else {
    ++scoreCard;
    console.log(scoreCard);
    answerTrue.disabled = false; //unblock clicks
    answerFalse.disabled = false;
    console.log("answered correct");
    ++questNum;
    questionsQuiz();
  }
});

function endQuiz() {
  clearInterval(timeInterval);
  console.log("Your Quiz has Ended!");
  console.log(scoreCard);
  let name = prompt("Please enter your initials");
  localStorage.setItem("Initials", name);
  localStorage.setItem("Score", scoreCard);
  console.log(localStorage);
  buttonQuiz.disabled = "false";
  answerTrue.disabled = true; //block clicks
  answerFalse.disabled = true;
}
