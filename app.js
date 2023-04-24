let playerOneScore = 0;
let playerTwoScore = 0;

function addPointPlayerOne() {
    playerOneScore++
    document.getElementById('playerOne-points').innerText = playerOneScore
}

function subtractPointPlayerOne() {
    playerOneScore--
    document.getElementById('playerOne-points').innerText = playerOneScore
}

function addPointPlayerTwo() {
    playerTwoScore++
    document.getElementById('playerTwo-points').innerText = playerTwoScore
}

function subtractPointPlayerTwo() {
    playerTwoScore--
    document.getElementById('playerTwo-points').innerText = playerTwoScore
}

// STUB Part 2
// FIXME Refactor these 4 functions into two functions, one for each player that handle both adding an subtracting points

function updatePlayerOneScore(pointValue) {
    // YOUR CODE HERE
}

function updatePlayerTwoScore(pointValue) {
    // yOUR CODE HERE
}

// FIXME Refactor these 4 functions into one function that takes in two arguments -- playerNumber, pointValue

/** @type {playerNumber = string} */
/** @type {pointValue = number} */

function updateScore(pointValue, playerNumber) {
    // YOUR CODE HERE
}