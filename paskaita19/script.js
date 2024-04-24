const symbols = ['❤️', '🌟', '🍀', '🌙', '🍄', '❤️', '🌟', '🍀', '🌙', '🍄'];
symbols.sort(() => 0.5 - Math.random());

function createCard(symbol) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.symbol = symbol;
  card.addEventListener('click', onCardClick);
  return card;
}

function onCardClick(event) {
  const card = event.target;
  revealCard(card);

  const revealedCards = document.querySelectorAll('.card.revealed:not(.matched)');
  if (revealedCards.length === 2) {
    checkMatch(revealedCards[0], revealedCards[1]);
  }
}

function revealCard(card) {
  if (card.className.includes('revealed')) return;
  card.textContent = card.dataset.symbol;
  card.classList.add('revealed');
}

function hideCard(card) {
  card.textContent = '';
  card.classList.remove('revealed');
}

function checkMatch(card1, card2) {
  if (card1.dataset.symbol === card2.dataset.symbol) {
    card1.classList.add('matched');
    card2.classList.add('matched');
  } else {
    setTimeout(() => {
      hideCard(card1);
      hideCard(card2);
    }, 1000);
  }
}

const gameBoard = document.getElementById('game-board');
symbols.forEach(symbol => gameBoard.appendChild(createCard(symbol)));

