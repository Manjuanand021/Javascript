/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

SOemthing


*/
//Variables declarations
var scores, roundScore, activePlayer, diceRandom, diceElement, isGameOn, previousScore;

init();

var rollElement = document.querySelector('.btn-roll');

//Event listeners
rollElement.addEventListener('click', rollDice);
document.querySelector('.btn-hold').addEventListener('click', holdScore);
document.querySelector('.btn-new').addEventListener('click', init);

function rollDice(event) {
    if (isGameOn) {
        //Random number between 1 to 6
        diceRandom = Math.floor(Math.random() * 6) + 1;

        //Display the result
        diceElement.style.display = 'block';
        diceElement.src = 'dice-' + diceRandom + '.png';

        //Update score
        if (diceRandom !== 1) {
            roundScore += diceRandom;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else if (diceRandom === 6 && previousScore === 6) {
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else {
            //Next player
            nextPlayer();
        }
        previousScore = diceRandom;
    }

}

function holdScore() {
    if (isGameOn) {
        //Add current score to GLOBAL score
        scores[activePlayer] += roundScore;

        //Update UI with updated global score
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //Check if player won the game
        if (scores[activePlayer] >= 20) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            diceElement.style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

            //Set game play off
            isGameOn = false;

        } else
            //Next players turn   
            nextPlayer();
    }
}

function nextPlayer() {
    activePlayer = activePlayer === 1 ? 0 : 1;
    //Set it back to initial value
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //Set active class
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //Hide the dice elementF
    diceElement.style.display = 'none';
}

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    isGameOn = true;

    diceElement = document.querySelector('.dice');
    diceElement.style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //rename the player names
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    //Remove all the css classes
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    //Apply active class to first player
    document.querySelector('.player-0-panel').classList.add('active');
}