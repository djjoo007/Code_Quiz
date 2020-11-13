const question = document.getElementById('question');
const submit = document.getElementById('submit');
const start = document.getElementById('time');
const buttons = document.getElementById('btns');
const time = document.getElementById('time');
const result = document.getElementById('result');



let currentQuestionIndex = 0;
let time = questions.length * 15;
const timer;

// Start Quiz Function
function startGame() {
    home.classList.add('hide');
    game.classList.remove('hide');
}

// Timer Function
timeContainer.textContent = time;

timer = setInterval(countDown, 1000);

function countDown() {
    time--;
    timeContainer.textContent = time;
    if (time <=0){
        endGame();
    }
}

// Generate Questions
function generate() {
    let current = questions[currentQuestionIndex];
    questionContainer.textContent = current.question;

    buttons.textContent = '';

    current.choices.forEach(
        function(choice, i) {
            const optionNode = document.createElement('button');
            optionNode.classList.add('choice');
            optionNode.setAttribute('value', choice);
            optionNode.textContent = i + 1 + '. ' + choice;
            optionNode.onClick = answerCheck;
            buttoms.appendChild(optionNode);
        }
    );
}



generate();
