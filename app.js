const question = document.getElementById('question');
const submit = document.getElementById('submit');
const start = document.getElementById('time');
const buttons = document.getElementById('btns');
const time = document.getElementById('time');
const result = document.getElementById('result');



let currentQuestionIndex = 0;
let time = questions.length * 15;
const timer;

function startGame() {
    home.classList.add('hide');
    1
    game.classList.remove('hide');
}

timeContainer.textContent = time;

timer = setInterval(countDown, 1000);

function generate() {
    let current = questions[currentQuestionIndex];
    questionContainer.textContent = current.question;

    buttons.textContent = '';
}



generate();
