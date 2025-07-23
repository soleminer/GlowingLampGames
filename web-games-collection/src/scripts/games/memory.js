const cards = [
    { id: 1, name: 'card1', image: 'path/to/image1.png' },
    { id: 2, name: 'card2', image: 'path/to/image2.png' },
    { id: 3, name: 'card3', image: 'path/to/image3.png' },
    { id: 4, name: 'card4', image: 'path/to/image4.png' },
    { id: 5, name: 'card5', image: 'path/to/image5.png' },
    { id: 6, name: 'card6', image: 'path/to/image6.png' },
    { id: 7, name: 'card7', image: 'path/to/image7.png' },
    { id: 8, name: 'card8', image: 'path/to/image8.png' },
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedCards = 0;

function shuffleCards() {
    cards.sort(() => Math.random() - 0.5);
}

function flipCard(card) {
    if (lockBoard || card === firstCard) return;

    card.classList.add('flip');

    if (!firstCard) {
        firstCard = card;
        return;
    }

    secondCard = card;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.dataset.name === secondCard.dataset.name;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

function startGame() {
    shuffleCards();
    // Additional code to render cards on the board
}

export { startGame, flipCard };