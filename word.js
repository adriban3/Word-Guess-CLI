var letter = require("./letter");

function Word(value) {
    this.value = value;
    this.guessed = false;
    this.showString = function() {}; //should show string representing word/phrase with letters guessed appearing and underscores otherwise
    this.onEachGuess = function() {}; //calls functtion of same name from letter.js file to see if letters are guessed on each user turn
}