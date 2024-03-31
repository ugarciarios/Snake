//HTML Elements
const board = document.getElementById('board')
const scoreBoard = document.getElementById('scoreBoard')
const startButton = document.getElementById('start')
const gameOverSing = document.getElementById('gameOver')

//Game settings
const boardSize = 10;
const gameSpeed = 100;
const squareTypes = {
    emptySquare: 0,
    snakeSquare: 1,
    foodSquare: 2
}