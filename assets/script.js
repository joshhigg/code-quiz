var quizBox = document.querySelector(".quiz-box");
var intro = document.querySelector(".intro");
var startButton = document.querySelector(".start-button");
var question = document.querySelector(".question");

var choicesDiv = document.querySelector("#choices");
var resultGood = document.querySelector(".result-good");
var resultBad = document.querySelector(".result-bad");
var timerEl = document.querySelector(".time-left");
var timer;
var timerCount = 60;
var currentQuestion = 0;

var questions = [{
    q: "What element do we use to link the Javascript file to the HTML file?",
    choices: ["<javascript>", "<js>", "<script>", "<link>"],
    a: "<script>",
},
{
    q: "How do you write 'Hello World' in an alert box?",
    choices: ["alert('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "msgBox('Hello World');"],
    a: "alert('Hello World');",
},
{
    q: "How can you comment in Javascript?",
    choices: ["<!--This is a comment-->", "//This is a comment", "'This is a comment'", "This is a comment"],
    a: "//This is a comment",
}, 
{
    q: "How do you declare a Javascript variable?",
    choices: ["varible studentName", "v studentName", "v=studentName", "var studentName"],
    a: "var studentName",
},
{
    q: "What is the correct way to write a JavaScript array?",
    choices: ["var colors = 'red','green','blue'", "var colors = 1 = red, 2 = green, 3 = blue", "var colors = red, green, blue", "var colors = ['red','green','blue']"],
    a: "var colors = ['red','green','blue']",
}
]



function startQuiz() {
    intro.hidden = true;
    quizBox.hidden = false;
    
    loadNextQuestion();
    startTimer();
}

function startTimer() {
    timer = setInterval(function () {
        if (timerCount >= 0) {
            timerEl.textContent = timerCount;
            timerCount--;
        } if (timerCount === 0) {
            console.log("game over cause time")
            quizBox.hidden = true
            //high score screen

        }
    }, 1000);
}

function loadNextQuestion() {
    question.textContent = questions[currentQuestion].q;
    choicesDiv.innerHTML = "";
    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
     
        var btn = document.createElement("button");
        btn.textContent = questions[currentQuestion].choices[i];
        btn.onclick = checkAns;
      
        choicesDiv.appendChild(btn);
    }

}

function checkAns(event) {
    var correctChoice = questions[currentQuestion].a
    var userChoice = event.target.textContent
    if (correctChoice === userChoice) {
        resultGood.hidden = false
    } else {
        timerCount -= 10;
        resultBad.hidden = false
    }

    setTimeout(function(){
        resultGood.hidden = true
        resultBad.hidden = true
    }, 1000);

    if(currentQuestion < questions.length-1) {
    currentQuestion++
    loadNextQuestion()
    } else {
        console.log("game over")
        quizBox.hidden = true
        //take to the high score screen
    }
    //if it is the last question, go to highscore screen
}


startButton.addEventListener("click", startQuiz);
//add listener for the option buttons.  One for if it was correct and one if it was incorrect?

//create end quiz and evaluate how much time is left
//Add highscore at the end and save it