var quizBox = document.querySelector(".quiz-box");
var intro = document.querySelector(".intro");
var startButton = document.querySelector(".start-button");
var question = document.querySelector(".question");
var option1 = document.querySelector(".option-1");
var option2 = document.querySelector(".option-2");
var option3 = document.querySelector(".option-3");
var option4 = document.querySelector(".option-4");
var resultMessage = document.querySelector(".result-message");

var appendTest = "test"
var question1 = {
    q: "What element do we use to link the Javascript file to the HTML file?",
    a1: {text:"<javascript>", isCorrect: false},
    a2: {text:"<js>", isCorrect: false},
    a3: {text:"<script>", isCorrect: true},
    a4: {text:"<link>", isCorrect: false}
}



init();
function init() {
    quizBox.hidden = true
}

function startQuiz() {
    intro.hidden = true;
    quizBox.hidden = false;
    resultMessage.hidden = true;
    loadQuestion1()
    //start timer
}

function loadQuestion1() {
    question.textContent = question1.q;
    option1.textContent = question1.a1.text;
    option2.textContent = question1.a2.text;
    option3.textContent = question1.a3.text;
    option4.textContent = question1.a4.text;
}

startButton.addEventListener("click",startQuiz);

