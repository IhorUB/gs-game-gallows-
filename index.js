// Create arr with words 
let words = [
    'freedom',
    'student',
    'javascript',
    'independence',
    'tiger',
    'manager'
];
// Choose random word
let word = words[Math.floor(Math.random() * words.length)];
// Create current arr
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
}

let remainLetters = word.length;
let attempt = word.length;

// Game loop
while (remainLetters > 0 && attempt > 0) {
    // Show condition of the game
    alert(answerArray.join(' '));

    let guess = prompt('Please, enter you letter').toLowerCase();
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
}

alert(answerArray.join(' '));
alert('The word was ' + word);