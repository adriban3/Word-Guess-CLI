var Letter = function(value) {
    this.value = value,
    this.guessed = false
}

Letter.prototype.dispL = function(userGuess) {
    if (userGuess === this.value || this.guessed) {
        //display letter value
        // this.guessed = true;
        if (userGuess === this.value) {
            this.guessed = true;
            return [this.value, 0];
        }
        // return [this.value, 0];
        else if (userGuess !== this.value) {
            return [this.value, 1];
        }
    }

    else if (userGuess !== this.value && !this.guessed) {
        //display "_"
        return ["_", 1];
    }
}

module.exports = Letter;