var Letter = require("./letter.js");

var Word = function(valArr) {
    this.valArr = valArr
}

Word.prototype.dispW = function(userGuess) {
    var dispStr = "";
    var intermediate = "";
    var count = 0;
    this.valArr.forEach(function(item) {
        intermediate = item.dispL(userGuess)
        count += intermediate[1];
        dispStr += intermediate[0] + " ";
        // dispStr += item.dispL(userGuess) + " ";
    })
    console.log("\n" + dispStr + "\n");
    return [dispStr, count];
}

module.exports = Word;