function Letter(char, numberUsed, index) {
    this.char = char;
    this.numberused = numberUsed;
    this.index = index;
    this.value = "_";
    this.guessed = false;
    this.onEachGuess = function() {}; //should reset letter from underscore to letter when guessed, updates on each user guess
    this.whenGuessed = function() {}; //should change this.guessed to true when this letter is guessed
}