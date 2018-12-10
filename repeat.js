let pickWord = function() {
    let words = [
        'freedom',
        'student',
        'javascript',
        'independence',
        'tiger',
        'manager'
    ];
    let word = words[Math.floor(Math.random() * words.length)];
    return word;
};
let setupAnswerArray = function(word) {
    let answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = '_';
    }
    return answerArray;
};
let showPlayerProgress = function(answerArray) {
    alert(answerArray.join(' '));
};
let getGuess = function() {
    let guess = prompt('Please, enter you letter').toLowerCase();
};
let updateGameState = function(guess, word, answerArray) {
    if (guess === null) {
        break;
    }
    else if (guess.length !== 1) {
        alert('Please, enter only one letter!');
    }
    //Reload game
    else {
        attempt--;
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainLetters--;
            }
        }
    }
};
letshowAnswerAndCongratulatePlayer = function(answerArray) {
    alert(answerArray.join(' '));
    alert('The word was ' + word);
};

// word: загаданное слово
var word = pickWord();
// answerArray: итоговый массив
var answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угадать
var remainingLetters = word.length;
while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    // guess: ответ игрока
    var guess = getGuess();
    if (guess === null) {
        break;
    }
    else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
    }
    else {
        // correctGuesses: количество открытых букв
        var correctGuesses = updateGameState(guess, word,
            answerArray);
        remainingLetters -= correctGuesses;
    }
}
showAnswerAndCongratulatePlayer(answerArray);