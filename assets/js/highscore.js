
// function to grab local storage winners and display
function printScores() {
    // grab scores from local storage
    var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
    console.log(highScores);
    // sort high scores in descending order
    highScores.sort(function(a, b){
        return b.score - a.score
    });
    console.log(highScores);
    // loop through the json list of high scores
    highScores.forEach(function(score) {
        // create list item element
        var player = document.createElement('li');
        player.textContent = score.initials + ' -- ' + score.score;

        // display list 
        var winners = document.getElementById('winners');
        winners.appendChild(player);
    });
}

// function to clear high scores 
function clearScores() {
    // remove item to completely remove array from local storage
    window.localStorage.removeItem("highScores");
    window.location.reload();
}

// callbacks
printScores();

// onclick
document.getElementById("clear").onclick = clearScores;