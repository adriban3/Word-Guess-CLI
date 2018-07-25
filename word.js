var Letter = require("./letter.js");

var Word = function(valArr) {
    this.valArr = valArr
}

Word.prototype.dispW = function(userGuess) {
    var dispArr = "";
    this.valArr.forEach(function(item) {
        dispArr += item.dispL(userGuess) + " ";
    })
    console.log(dispArr);
}

module.exports = Word;