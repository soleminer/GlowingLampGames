const navbar = require('../components/navbar');
const ticTacToe = require('./games/tic-tac-toe');
const snake = require('./games/snake');
const memory = require('./games/memory');

document.addEventListener('DOMContentLoaded', () => {
    navbar.init();
    setupGameListeners();
});

function setupGameListeners() {
    document.getElementById('tic-tac-toe-btn').addEventListener('click', () => {
        ticTacToe.init();
    });

    document.getElementById('snake-btn').addEventListener('click', () => {
        snake.start();
    });

    document.getElementById('memory-btn').addEventListener('click', () => {
        memory.init();
    });
}