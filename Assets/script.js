let quizQs = [
    {question: "What does HTML stand for?", answers:["Hyperlink Text Markup Language", "Hyperdrive Text Markdown Language", "Hypertext Markup Language", "Hypertext Markdown Language"]},
    {question: "What does CSS stand for?", answers: ["Cascading Style Sheets", "Cascading Sheet Styles", "Containing Style Staples", "Container Style Selector"]},
    {question: "Which of these is a string?", answers: ["'hello world'", 495, "quizQ()", "hello world"]}, 
    {question: "How do you write you header 1 element?", answers: ["<header1>", "<head1>", "<h>", "<h1>"]},
    {question: "True or False. CSS only affects the style of a page.", answers: ["true", "false"]}
];

let rotatingQs = document.querySelector("h2");
let rotatingAsA = document.querySelector("#a");
let rotatingAsB = document.querySelector("#b");
let rotatingAsC = document.querySelector("#c");
let rotatingAsD = document.querySelector("#d");
let container = document.querySelector(".container");

let currentQ = 0;
renderQ();

container.addEventListener("click",function(){
    
    currentQ++;
    renderQ();

});

function renderQ(){
    
    rotatingQs.textContent = quizQs[currentQ].question;
    rotatingAsA.textContent = quizQs[currentQ].answers[0];
    rotatingAsB.textContent = quizQs[currentQ].answers[1];
    rotatingAsC.textContent = quizQs[currentQ].answers[2];
    rotatingAsD.textContent = quizQs[currentQ].answers[3];

};