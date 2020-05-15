//Triggers start button
let buttonQuiz = document.getElementById("quizBtn");
buttonQuiz.addEventListener("click", respondClick);
let timerQuiz = document.getElementById("countdown");
//question and answer variables
let qpiLe1 = ["JavaScript was invented in 5 days. True or False?", "JavaScript is a cool language to learn. True or False?", "HTML stand Hyper Text Made Up Language, True or False?", ]
let apiLe1 = ["False", "True", "False"]
let userAnswers = []

let question = document.getElementById("quesTions");
question.innerHTML = "Questions will appear here.";

// function below is where questions will be triggered and looped through??
function questionsQuiz () {
  question.innerHTML = qpiLe1[0];  
 console.log("questions happen here");
}

let answerTrue = document.querySelector("#ansTrue");
answerTrue.addEventListener("click", function() {
userAnswers.push("True");
//block more clicks
//compare answers
//subtract time on clock if necessary
//load next question
//reset button??
});

let answerFalse = document.querySelector("#ansFalse");
answerFalse.addEventListener("click", function() {
userAnswers.push("False");
console.log(userAnswers)
//compare answers
//subtract time on clock if necessary
//load next question
});



// function below sets time, starts countdown timer, triggers Question function and Quiz End
function respondClick () {
console.log("clicked")
    let timeLeft = 60;
    questionsQuiz(); // calls questions for user to answer
     //calls buttons for user to answer questions
    var timeInterval = setInterval(function() {
        timerQuiz.textContent = timeLeft + " seconds remaining";
        timeLeft--;
    
        if (timeLeft === 0) {
          timerQuiz.textContent = "";
          endQuiz();
          clearInterval(timeInterval);
        }
    
      }, 1000);
}

// function below is where questions will be triggered and looped through??
function questionsQuiz () {
  question.innerHTML = qpiLe1[0];  
 console.log("questions happen here");
}

function endQuiz () {
  console.log("Times Up!!!")
}