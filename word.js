var Letter = require("./letter.js");

var Word = function(valArr) {
    this.valArr = valArr
    this.dispArr = [];
}

Word.prototype.dispW = function(userGuess) {
    this.valArr.forEach(function(item) {
        this.dispArr.push(item.dispL(userGuess));
    })
    console.log(this.dispArr);
}

module.exports = Word;