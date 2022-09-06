let quizQs = [
    {question: "What does HTML stand for?", answers:["A. Hyperlink Text Markup Language", "B. Hyperdrive Text Markdown Language", "C. Hypertext Markup Language", "D. Hypertext Markdown Language"], correctAnswer: "C. Hypertext Markup Language"},
    {question: "What does CSS stand for?", answers: ["A. Cascading Style Sheets", "B. Cascading Sheet Styles", "C. Containing Style Staples", "D. Container Style Selector"], correctAnswer: "A. Cascading Style Sheets"},
    {question: "Which of these is a string?", answers: ["A. 'hello world'","B. 495", "C. quizQ()", "D. hello world"], correctAnswer: "A. 'hello world'"}, 
    {question: "How do you write you header 1 element?", answers: ["A. <header1>", "B. <head1>", "C. <h>", "D. <h1>"], correctAnswer: "D. <h1>"},
    {question: "True or False. CSS only affects the style of a page.", answers: ["A. true", "B. false", "C. rock", "D. paper"], correctAnswer: "B. false"}
];

//all my declarations
let rotatingQs = document.querySelector("h2");
let rotatingAsA = document.querySelector("#a");
let rotatingAsB = document.querySelector("#b");
let rotatingAsC = document.querySelector("#c");
let rotatingAsD = document.querySelector("#d");
let answerButton = document.querySelector("#answers");
let countDownTimer = document.querySelector("#timer");
let currentQuestion = document.querySelector("#question")
let lastQ = quizQs.length-1;
let highScores = document.querySelector("#hsInput");
let score = document.getElementById("finalScore");

let timer = 60;
let intervalId;

let currentQ = 0;

let currentAnswers = quizQs[currentQ].answers;

let highScoreList = []

//show questions and start count down
renderQ();
startCountDown();

//have the questions cycle through when clicked or end quiz once at end
answerButton.addEventListener("click", function () {
    if (currentQ === lastQ){
        clearInterval(intervalId)
        quizOver();
    }else{
        currentQ++;
        renderQ();
    }
})

//check the content of the buttons to see if they're the correct answer and then what to do with it
function checkCorrect(e){
    let correctAnswer = quizQs[currentQ].correctAnswer;
    console.log(e.textContent)
    console.log(correctAnswer);
    if (e.textContent === correctAnswer){
        console.log("Correct!");
    }else{
        console.log("Incorrect!");
        timer -=10;
    }
}

//countdown function
function startCountDown(){
    
    intervalId = setInterval(function(){
        timer --;
        countDownTimer.textContent = "Timer: " + timer;
        if(timer === 0){
            clearInterval(intervalId);
            quizOver();
        }
    },1000)
}

//input content to run through
function renderQ(){
    
    rotatingQs.textContent = quizQs[currentQ].question;
    rotatingAsA.textContent = quizQs[currentQ].answers[0];
    rotatingAsB.textContent = quizQs[currentQ].answers[1];
    rotatingAsC.textContent = quizQs[currentQ].answers[2];
    rotatingAsD.textContent = quizQs[currentQ].answers[3];
    
};

//what needs to happen when quiz stops
function quizOver(){
    currentQuestion.style.display = "none";
    if (currentQuestion.style.display === "none"){
        highScores.style.display = "block";
    }else{currentQuestion.style.display = "block";
    }
    console.log(timer);
    localStorage.setItem("timer", JSON.stringify(timer));
    renderScore();
}

//shows score
function renderScore(){
    if (localStorage.getItem("highScores") !== null)
    highScoreList = JSON.parse(localStorage.getItem("highScores"));
    let yourScore = JSON.parse(localStorage.getItem("timer"));
    score.textContent = "Your Score is " + yourScore + "!";
}

//inputs initials 
var userInput;
function inputInitials(i){
    userInput = document.getElementById("initials").value;
    console.log(userInput);
    let scoreObject = {score:timer, initials:userInput};
    highScoreList.push(scoreObject);
    localStorage.setItem("highScores", JSON.stringify(highScoreList));
    renderInitials();
}

//shows initials
function renderInitials(){
    //create li,loop, append object
    let newScore = document.createElement("li");
    newScore.textContent = highScoreList;
    for (let hs = 0; hs < highScoreList.length; hs++) 
    document.getElementById("hsList").append(userInput);
}