// Variables
var startButton = document.querySelector("#start-button")
// variable for timer
var quizTimer = setInterval(function () {
    quizSecs--;
    startTime.textContext = "quiz starting in" +quizSecs

    if(quizSecs ---0) {
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


function quizTime () {
    var counter = 10;
    setInterval(function () {
        counter--;
        TimeRanges.textContext = "remaining time: " + counter;
        if (counter === 0) {
            clearInterval(counter);
            quizTime.classList.add("hide");

        }
    }, 1000);
}
// Questions
var questions = [
    {
        q: 'first question',
        a: 'five',
        c: ['one', 'three', 'four', 'five']
    },
    {
        q: 'second question',
        a: 'five',
        c: ['one', 'three', 'four', 'five']
    }, 
    {
        q: 'third question',
        a: 'five',
        c: ['one', 'three', 'four', 'five']
    }
    {
        q: 'fourth question',
        a: 'five',
        c: ['one', 'three', 'four', 'five']
    }, 
    {
        q: 'fifth question',
        a: 'five',
        c: ['one', 'three', 'four', 'five']
    }
]

questions[].c

// FUNCTIONS
// Function to start timer
function startTime() {

}

// Function to start the quiz
function startQuiz() {
    // Add class to start screen to hide it
    // Remove class from question screen to show it
    // Call timer function
    startTime()

}

// Functoin to get question
function getQuestion() {

}


// Event Listeners
startButton.addEventListener("click", startQuiz)