let quizQs = [
    {question: "What does HTML stand for?", answers:["A. Hyperlink Text Markup Language", "B. Hyperdrive Text Markdown Language", "C. Hypertext Markup Language", "D. Hypertext Markdown Language"], correctAnswer: "C. Hypertext Markup Language"},
    {question: "What does CSS stand for?", answers: ["A. Cascading Style Sheets", "B. Cascading Sheet Styles", "C. Containing Style Staples", "D. Container Style Selector"], correctAnswer: "A. Cascading Style Sheets"},
    {question: "Which of these is a string?", answers: ["A. 'hello world'","B. 495", "C. quizQ()", "D. hello world"], correctAnswer: "A. 'hello world'"}, 
    {question: "How do you write you header 1 element?", answers: ["A. <header1>", "B. <head1>", "C. <h>", "D. <h1>"], correctAnswer: "D. <h1>"},
    {question: "True or False. CSS only affects the style of a page.", answers: ["A. true", "B. false", "C. rock", "D. paper"], correctAnswer: "B. false"}
];

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

let timer = 60;
let intervalId;

let currentQ = 0;

let currentAnswers = quizQs[currentQ].answers;

renderQ();
startCountDown();

answerButton.addEventListener("click", function () {
    if (currentQ === lastQ){
        quizOver();
    }else{
        currentQ++;
        renderQ();
    }
})


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

function renderQ(){
    
    rotatingQs.textContent = quizQs[currentQ].question;
    rotatingAsA.textContent = quizQs[currentQ].answers[0];
    rotatingAsB.textContent = quizQs[currentQ].answers[1];
    rotatingAsC.textContent = quizQs[currentQ].answers[2];
    rotatingAsD.textContent = quizQs[currentQ].answers[3];
    
};

function quizOver(){
    console.log(timer);
    
    currentQuestion.style.display = "none";
    highScores.style.display = "none";
}