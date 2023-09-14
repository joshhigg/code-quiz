var quizBox = document.querySelector(".quiz-box");
var intro = document.querySelector(".intro");
var startButton = document.querySelector(".start-button");
var question = document.querySelector(".question");
var option1 = document.querySelector(".option-1");
var option2 = document.querySelector(".option-2");
var option3 = document.querySelector(".option-3");
var option4 = document.querySelector(".option-4");
var options = document.querySelector(".options");
var resultMessage = document.querySelector(".result-message");
var timerEl = document.querySelector(".time-left");
var timer;
var timerCount = 60;
var currentQuestion = 0;

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
    a2: {text:"//This is a comment", isCorrect: true},
    a3: {text:"'This is a comment'", isCorrect: false},
    a4: {text:"This is a comment", isCorrect: false},
},
    {
    q: "How do you declare a Javascript variable?",
    a1: {text:"varible studentName", isCorrect: false},
    a2: {text:"v studentName", isCorrect: false},
    a3: {text:"v=studentName", isCorrect: false},
    a4: {text:"var studentName", isCorrect: true},
},
    {
    q: "What is the correct way to write a JavaScript array?",
    a1: {text:"var colors = 'red','green','blue'", isCorrect: false},
    a2: {text:"var colors = 1 = red, 2 = green, 3 = blue", isCorrect: false},
    a3: {text:"var colors = red, green, blue", isCorrect: false},
    a4: {text:"var colors = ['red','green','blue']", isCorrect: true},
}
]

init();
function init() {
    quizBox.hidden = true
}

function startQuiz() {
    intro.hidden = true;
    quizBox.hidden = false;
    resultMessage.hidden = true;
    loadNextQuestion();
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
        //figure out how to reduce time by 10 secs if an answer is wrong
    }, 1000);
}

function loadNextQuestion() {
        question.textContent = questions[currentQuestion].q;
        option1.textContent = questions[currentQuestion].a1.text;
        option2.textContent = questions[currentQuestion].a2.text;
        option3.textContent = questions[currentQuestion].a3.text;
        option4.textContent = questions[currentQuestion].a4.text;
        option1.addEventListener("click",checkAns);
        option2.addEventListener("click",checkAns);
        option3.addEventListener("click",checkAns);
        option4.addEventListener("click",checkAns);
        // options.addEventListener("click", checkAns);
}

function checkAns() {
        currentQuestion++
        loadNextQuestion()

    //If selected answer has "isCorrect" as true, continue to next question
    //if selected answer has it as false, lose 10 seconds and continue
    //if it is the last question, go to highscore screen
}


startButton.addEventListener("click",startQuiz);
//add listener for the option buttons.  One for if it was correct and one if it was incorrect?


//add result message

//Add highscore at the end and save it