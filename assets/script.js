var quizBox = document.querySelector(".quiz-box");
var intro = document.querySelector(".intro");
var startButton = document.querySelector(".start-button");
var question = document.querySelector(".question");
var option1 = document.querySelector(".option-1");
var option2 = document.querySelector(".option-2");
var option3 = document.querySelector(".option-3");
var option4 = document.querySelector(".option-4");
var resultMessage = document.querySelector(".result-message");
var timerEl = document.querySelector(".time-left");
var timer;
var timerCount = 60;
var currentQuestion = 0;


// var question1 = {
//     q: "What element do we use to link the Javascript file to the HTML file?",
//     a1: {text:"<javascript>", isCorrect: false},
//     a2: {text:"<js>", isCorrect: false},
//     a3: {text:"<script>", isCorrect: true},
//     a4: {text:"<link>", isCorrect: false}
// }
// var question2 = {
//     q: "How do you write 'Hello World' in an alert box?",
//     a1: {text:"alert('Hello World');", isCorrect: true},
//     a2: {text:"alertBox('Hello World');", isCorrect: false},
//     a3: {text:"msg('Hello World');", isCorrect: false},
//     a4: {text:"msgBox('Hello World');", isCorrect: false},
// }

var questions = [{
    q: "What element do we use to link the Javascript file to the HTML file?",
    a1: {text:"<javascript>", isCorrect: false},
    a2: {text:"<js>", isCorrect: false},
    a3: {text:"<script>", isCorrect: true},
    a4: {text:"<link>", isCorrect: false},
},
    {
    q: "How do you write 'Hello World' in an alert box?",
    a1: {text:"alert('Hello World');", isCorrect: true},
    a2: {text:"alertBox('Hello World');", isCorrect: false},
    a3: {text:"msg('Hello World');", isCorrect: false},
    a4: {text:"msgBox('Hello World');", isCorrect: false},
},
    {
    q: "How can you comment in Javascript?",
    a1: {text:"<!--This is a comment-->", isCorrect: false},
    a2: {text:"//This is a comment", isCorrect: false},
    a3: {text:"'This is a comment'", isCorrect: false},
    a4: {text:"This is a comment", isCorrect: false},
},
]

init();
function init() {
    quizBox.hidden = true
}

function startQuiz() {
    intro.hidden = true;
    quizBox.hidden = false;
    resultMessage.hidden = true;
    loadQuestions();
    startTimer();
}

function startTimer() {
    timer = setInterval(function() {
        if (timerCount >= 0) {
            timerEl.textContent = timerCount;
            timerCount--;
        } if (timerCount === 0) {
            //high score screen
        }
    }, 1000);
}

function loadQuestions() {
    for(var i = 0; i < questions.length; i++) {
        if(currentQuestion = 0) {
        question.textContent = questions[currentQuestion].q;
        option1.textContent = questions[currentQuestion].a1.text;
        option2.textContent = questions[currentQuestion].a2.text;
        option3.textContent = questions[currentQuestion].a3.text;
        option4.textContent = questions[currentQuestion].a4.text;
    }
    }  //figure out a way to have the for loop, loop through each question until there are no more questions
}


startButton.addEventListener("click",startQuiz);


//add result message