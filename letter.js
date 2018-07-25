var Letter = function(value) {
    this.value = value,
    this.guessed = false
}

Letter.prototype.dispL = function(userGuess) {
    if (userGuess === this.value || this.guessed) {
        //display letter value
        this.guessed = true;
        return this.value;
    }

    else if (userGuess !== this.value && !this.guessed) {
        //display "_"
        return "_";
    }
}

module.exports = Letter;