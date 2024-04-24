document.addEventListener('DOMContentLoaded', function () {
    const words = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
    let currentWord = "";
    let guessesLeft = 6;
    let guessedLetterSet = new Set();
  
    const form = document.getElementById('guessForm');
    const letterInput = document.getElementById('letterInput');
    const wordToGuess = document.getElementById('wordToGuess');
    const result = document.getElementById('result');
    const guessedLetters = document.getElementById('guessedLetters');
    const guessesLeftElement = document.getElementById('guessesLeft');
  
    setupNewWord();
    form.addEventListener('submit', handleGuess);
    document.getElementById('newWordButton').addEventListener('click', setupNewWord);
  
    function setupNewWord() {
      currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
      guessedLetterSet.clear();
      guessesLeft = 6;
      updateDisplay();
    }
  
    function handleGuess(event) {
      event.preventDefault();
      const guess = letterInput.value.toUpperCase();
  
      if (guess.length === 1 && /^[A-Z]$/i.test(guess)) {
        if (!guessedLetterSet.has(guess)) {
          guessedLetterSet.add(guess);
          updateGame(guess);
        } else {
          result.textContent = "Ši raidė jau buvo spėta.";
        }
      } else {
        result.textContent = "Įveskite vieną raidę.";
      }
  
      letterInput.value = '';
      letterInput.focus();
    }
  
    function updateDisplay() {
      wordToGuess.textContent = currentWord.split('').map(letter => guessedLetterSet.has(letter) ? letter : '_').join(' ');
      guessedLetters.textContent = Array.from(guessedLetterSet).join(', ');
      guessesLeftElement.textContent = guessesLeft;
    }
  
    function updateGame(guess) {
      let correctGuess = false;
  
      for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === guess) {
          correctGuess = true;
          break;
        }
      }
  
      if (correctGuess) {
        updateDisplay();
        if (!wordToGuess.textContent.includes('_')) {
          result.textContent = "Sveikiname! Atspėjote žodį!";
          form.removeEventListener('submit', handleGuess);
        }
      } else {
        guessesLeft--;
        updateDisplay();
        if (guessesLeft === 0) {
          result.textContent += " Žaidimas baigtas. Žodis buvo: " + currentWord;
          form.removeEventListener('submit', handleGuess);
        } else {
          result.textContent = "Neteisingas spėjimas.";
        }
      }
    }
  });


  // Žodžių masyvas
var words = ["apple", "banana", "orange", "grape", "kiwi", "strawberry"];

// Atsitiktinis žodžio pasirinkimas
var currentWord = words[Math.floor(Math.random() * words.length)];

// Sukuriamas masyvas žodžio raidėms
var wordLetters = currentWord.split("");

// Sukuriamas masyvas spėtoms raidėms
var guessedLetters = [];

// Ribotas spėjimų skaičius
var guessesLeft = 6;

// Funkcija, kuri patikrina, ar raide jau buvo spėta
function hasAlreadyGuessed(letter) {
    return guessedLetters.includes(letter);
}

// Funkcija, kuri atvaizduoja dabartinį žodį su atspėtomis raidėmis
function displayWord() {
    var displayedWord = "";
    wordLetters.forEach(function(letter) {
        if (guessedLetters.includes(letter)) {
            displayedWord += letter;
        } else {
            displayedWord += "_";
        }
    });
    console.log(displayedWord);
}

// Funkcija, kuri patikrina, ar žaidėjas laimėjo
function checkWin() {
    return wordLetters.every(function(letter) {
        return guessedLetters.includes(letter);
    });
}

// Funkcija, kuri patikrina, ar žaidėjas pralaimėjo
function checkLoss() {
    return guessesLeft === 0;
}

// Funkcija, kuri vykdo žaidimo logiką
function playGame() {
    console.log("Welcome to Hangman!");
    displayWord();

    while (!checkWin() && !checkLoss()) {
        var guess = prompt("Guess a letter:").toLowerCase();

        if (guess.length !== 1 || !/[a-z]/.test(guess)) {
            console.log("Please enter a single letter.");
            continue;
        }

        if (hasAlreadyGuessed(guess)) {
            console.log("You already guessed that letter.");
            continue;
        }

        guessedLetters.push(guess);

        if (!wordLetters.includes(guess)) {
            guessesLeft--;
            console.log("Incorrect guess! You have " + guessesLeft + " guesses left.");
        }

        displayWord();
    }

    if (checkWin()) {
        console.log("Congratulations! You guessed the word correctly: " + currentWord);
    } else {
        console.log("Sorry, you ran out of guesses. The word was: " + currentWord);
    }
}

// Pradėti žaidimą
playGame();

  