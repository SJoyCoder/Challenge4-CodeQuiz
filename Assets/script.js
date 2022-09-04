let quizQs = [
    {question: "What does HTML stand for?", answers:["A. Hyperlink Text Markup Language", "B. Hyperdrive Text Markdown Language", "C. Hypertext Markup Language", "D. Hypertext Markdown Language"], correctAnswer: function() {return this.answers[2]}},
    {question: "What does CSS stand for?", answers: ["A. Cascading Style Sheets", "B. Cascading Sheet Styles", "C. Containing Style Staples", "D. Container Style Selector"], correctAnswer: function() {return this.answers[0]}},
    {question: "Which of these is a string?", answers: ["A. 'hello world'","B. 495", "C. quizQ()", "D. hello world"], correctAnswer: function() {return this.answers[0]}}, 
    {question: "How do you write you header 1 element?", answers: ["A. <header1>", "B. <head1>", "C. <h>", "D. <h1>"], correctAnswer: function() {return this.answers[3]}},
    {question: "True or False. CSS only affects the style of a page.", answers: ["A. true", "B. false", "C. rock", "D. paper"], correctAnswer: function() {return this.answers[1]}},   
];

let rotatingQs = document.querySelector("h2");
let rotatingAsA = document.querySelector("#a");
let rotatingAsB = document.querySelector("#b");
let rotatingAsC = document.querySelector("#c");
let rotatingAsD = document.querySelector("#d");
let answerButton = document.querySelector("#answers")
let container = document.querySelector(".container");
let countDownTimer = document.querySelector("#timer");


let timer = 60;
let intervalId;

let currentQ = [0];
console.log(currentQ)

let correctAnswer = quizQs[currentQ].correctAnswer();
console.log(correctAnswer);

let currentAnswers = quizQs[currentQ].answers;
console.log(currentAnswers)

renderQ();
startCountDown();

answerButton.addEventListener("click", function () {
    if (currentQ === 3){
        quizOver();
    }else{
    currentQ++;
    renderQ();
}
    if (answerButton !== correctAnswer){
        timer -10;
    }
});

function startCountDown(){
    
    intervalId = setInterval(function(){
        timer --;
        countDownTimer.textContent = "Timer: " + timer;
        if(timer === 0){
            clearInterval(intervalId);
            // quizOver();
        }
    },1000)
}

function renderQ(){
    
    rotatingQs.textContent = quizQs[currentQ].question;
    rotatingAsA.textContent = quizQs[currentQ].answers[0];
    rotatingAsB.textContent = quizQs[currentQ].answers[1];
    rotatingAsC.textContent = quizQs[currentQ].answers[2];
    rotatingAsD.textContent = quizQs[currentQ].answers[3];
    
};


function quizOver(){
    window.location.replace("highscore.html");
}