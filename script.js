// Variables
var startButton = document.querySelector("#start-button");
// variable for timer
var quizSecs = 30;
var quizTimer = setInterval(function () {
  quizSecs--;
  // startTime.textContext = "quiz starting in" +quizSecs

  if (quizSecs == 0) {
    startTime.classList.add("hide");
    renderQuestion();
    quizTime();
    stop(quizSecs);
  }
}, 1000);

//variable for startscreen

function quizTime() {
  var counter = 10;
  setInterval(function () {
    counter--;
    timer.textContext = "remaining time: " + counter;
    if (counter === 0) {
      clearInterval(counter);
      quiz.classList.add("hide");
      scorePage.classList.remove("hide");
    }
  }, 1000);
}
// variable for questions
// variable for questionIndex
// Questions
var question = [
  {
    q: "first question",
    a: "five",
    c: ["one", "three", "four", "five"],
  },
  {
    q: "second question",
    a: "five",
    c: ["one", "three", "four", "five"],
  },
  {
    q: "third question",
    a: "five",
    c: ["one", "three", "four", "five"],
  },
  {
    q: "fourth question",
    a: "five",
    c: ["one", "three", "four", "five"],
  },
  {
    q: "fifth question",
    a: "five",
    c: ["one", "three", "four", "five"],
  },
];

//question[.c]

var lastQuestion = question.length - 1;
var displayedQuestion = 0;
function nextQuestion() {
  displayedQuestion++;
  renderQuestion();
  nextQuestion;
}

// FUNCTIONS
// Function to start timer

// Function to start the quiz
function startQuiz() {
  // Add class to start screen to hide it
  // Remove class from question screen to show it
  // Call timer function
  
  // quizTimer();
}

// Function to get question
function renderQuestion() {
  var q = question[displayedQuestion];
  console.log(question);
  var questionEL = document.querySelector("#question");
  questionEL.innerHTML = "<p>" + q.question + "</p>";
  a.innerHTML = q.a;
  b.innerHTML = q.b;
  c.innerHTML = q.c;
  d.innerHTML = q.d;

  console.log(question);
}

// Event Listeners
startButton.addEventListener("click", startQuiz);
