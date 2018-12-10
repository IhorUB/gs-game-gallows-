let words = [
    'text',
    'test',
    'name'
]

let word = words[Math.floor(Math.random() * words.length)];
let rememberLetters = word.length;

let answerArr = [];
for (let i = 0; i < word.length; i++) {
    answerArr[i] = '_';
}

while (rememberLetters > 0) {
    alert(answerArr.join(' '));
    let guess = prompt("enter");
    if (guess === null) {
        break;
    }
    else if (guess.length !== 1) {
        alert('please enter only one');
    }
    else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArr[j] = guess;
                rememberLetters--;
            }
        }
    }
}
alert(answerArr.join(' '));
alert('You are win!')
