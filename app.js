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

// Answer Check Function
function answerCheck() {
    if(this.value !== questions[currentQuestionIndex].answer) {
        time -=15;
        if (time <= 0) {
            time = 0;
        }

        timeContainer.textContent = time;
        result.textContent = 'Incorrect';
    }   else {
        result.textContent = 'Correct';
    }

    // Hide functions
    result.classList.remove('hide');
    setTimeout(function() {
        result.classList.add('hide');
    }, 1000)
    currentQuestionIndex ++;
    if (currentQuestionIndex === questions.length){
        endGame();
    } else {
        generate();
    }
}

// End Game Function
function endGame() {
    clearInterval(timer);
    end.classList.remove('hide');
    finalScore.textContent = time;
    game.classList.add('hide');
}

// Save High Score Function
function saveScore() {
    const initials = initialsContainer.value.trim();
    if(initials !== "") {
        const highScores = JSON.parse(window.localStorage.getItem('highScores')) || [];

        const newScore = {
            initials: initials,
            score: time
        };
        highScores.push(newScore);
        window.localStorage.setItem('highScores', JSON.stringify(highScores));
    }
}