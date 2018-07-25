var Letter = require("./letter.js");

var Word = function(valArr) {
    this.valArr = valArr
}

Word.prototype.dispW = function(userGuess) {
    var dispStr = "";
    this.valArr.forEach(function(item) {
        dispStr += item.dispL(userGuess) + " ";
    })
    console.log(dispStr);
    return dispStr;
}

module.exports = Word;