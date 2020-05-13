let buttonQuiz = document.getElementById("quizBtn");
buttonQuiz.addEventListener("click", respondClick);
let timerQuiz = document.getElementById("countdown");
let qpiLe1 = ["JavaScript was invented in 5 days. True or False?", "JavaScript is a cool language to learn. True or False?"]

let question = document.getElementById("quesTions");
    question.innerHTML = "Malesuada proin libero nunc consequat interdum varius. Tempus egestas sed sed risus pretium quam vulputate. Ultrices sagittis orci a scelerisque purus semper eget. In fermentum et sollicitudin ac orci.";
    console.log("questions happen here")

function respondClick () {
    console.log("clicked")
    let timeLeft = 60;
    questionsQuiz();
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

function questionsQuiz () {
    question.innerHTML = qpiLe1[0];
    console.log("questions happen here");
  }

function endQuiz () {
  console.log("made it")
}