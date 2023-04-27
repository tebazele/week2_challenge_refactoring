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

/**
 * 
 * @param {number} pointValue 
 */
function updatePlayerOneScore(pointValue) {
    playerOneScore += pointValue
    updateScreen()
}
/**
 * 
 * @param {number} pointValue 
 */
function updatePlayerTwoScore(pointValue) {
    playerTwoScore += pointValue
    updateScreen()
}

// NOTE this function will update both players' scores
function updateScreen() {
    // YOUR CODE HERE
    document.getElementById('playerOne-points').innerText = playerOneScore
    document.getElementById('playerTwo-points').innerText = playerTwoScore
}

// STUB Part 3
// FIXME Refactor these 4 functions into one function that takes in two arguments -- playerNumber, pointValue

// NOTE create an object with the player number as the key and the player score as the value
const players = {
    'One': 0,
    'Two': 0
}

/** 
 * 
 * @param {number} pointValue
 * @param {string} key 
 * */
function updateScore(pointValue, key) {
    players[key] += pointValue
    updateScreen2(key)
}

function updateScreen2(key) {
    document.getElementById(`player${key}-points`).innerText = players[key]
}