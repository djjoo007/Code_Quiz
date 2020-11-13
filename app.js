const question = document.getElementById('question');
const submit = document.getElementById('submit');
const start = document.getElementById('time');
const buttons = document.getElementById('btns')
const time = document.getElementById('time');
const result = document.getElementById('result');



let currentQuestionIndex = 0;
let time = questions.length * 15;
const timer;

function startGame() {
    home.classList.add('hide');1
    game.classList.remove('hide');
}

timeContainer.textContent = time;

timer = setInterval(countDown, 1000);

let questions = [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      choices: ["<script>", "<javascript>", "<js>", "<scripting>"],
      answer: "<script>"
    },
    {
      question:
        "What is the correct syntax for referring to an external script called 'xxx.js'?",
      choices: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>", "<script file='xxx.js'>"],
      answer: "<script src='xxx.js'>"
    },
    {
      question: "What are variables used for in JavaScript Programs?",
      choices: ["Storing numbers, dates, or other values", "Varying randomly", "Validating a form", "None of the above"],
      answer: "Storing numbers, dates, or other values"
    },
    {
      question:
        "Which tool can you use to ensure code quality?",
      choices: ["jQuery", "ESLint", "RequireJS", "Angular"],
      answer: "ESLint"
    },
    {
      question: 
        "How do you write 'Hello World' in an alert box?",
      choices: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');" "alert('Hello World');"],
      answer: "alert('Hello World');"
    }
   ];