var quizBox = document.querySelector(".quiz-box");
var intro = document.querySelector(".intro");
var startButton = document.querySelector(".start-button");
var question = document.querySelector(".question");
var choicesDiv = document.querySelector("#choices");
var resultGood = document.querySelector(".result-good");
var resultBad = document.querySelector(".result-bad");
var timerEl = document.querySelector(".time-left");
var time = document.querySelector(".timer");
var highscoreEntry = document.querySelector(".high-score-entry");
var scoreReceived = document.querySelector("#score-received");
var initialsEntered = document.querySelector("#initials-entered");
var submit = document.querySelector("#submit");
var highscoreList = document.querySelector(".high-score-list")
var highscoreDisplay = document.querySelector(".high-score-display")
var highscores = JSON.parse(localStorage.getItem("highScores")) || [];

var MAX_HIGH_SCORES = 10
var timer;
var timerCount = 75;
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
            highscoreEntry.hidden = false
            scoreReceived.textContent = timerCount + "!";
            time.hidden = true
            clearInterval(timer)
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
    }, 1500);

    if(currentQuestion < questions.length-1) {
    currentQuestion++
    loadNextQuestion()
    } else {
        console.log("game over")
        quizBox.hidden = true
        highscoreEntry.hidden = false
        scoreReceived.textContent = timerCount + "!";
        time.hidden = true
        clearInterval(timer)
    }
}

submit.addEventListener("click", function(event) {
    event.preventDefault();
    var initials = initialsEntered.value
    var finalScore = timerCount
    var score = {
        score: finalScore,
        name: initials
    }
    highscores.push(score);

    highscores.sort( (a,b) => b.score - a.score)
    highscores.splice(10);

    localStorage.setItem('highscores', JSON.stringify(highscores));
    console.log(highscores)
    // localStorage.setItem("initials", JSON.stringify(initials));
    highscoreEntry.hidden = true
    displayHighscores()
});

function displayHighscores() {
    highscoreList.hidden = false
}


startButton.addEventListener("click", startQuiz);
