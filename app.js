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
    home.classList.add('hide');
    game.classList.remove('hide');
}