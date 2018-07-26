var inquirer = require("inquirer");
var Word = require("./word.js");
var Letter = require("./letter.js");

var wordArr = [
    "awkward",
    "bagpipes",
    "banjo",
    "bungler",
    "croquet",
    "cryptic",
    "dwarves",
    "fervid",
    "fishhook",
    "fjord",
    "gazebo",
    "gypsy",
    "haiku",
    "haphazard",
    "hyphen",
    "ivory",
    "jazzy",
    "jiffy",
    "jinx",
    "jukebox",
    "kayak",
    "kiosk",
    "klutz",
    "memento",
    "mystify",
    "numbskull",
    "ostracize",
    "oxygen",
    "pajama",
    "phlegm",
    "pixel",
    "polka",
    "quadricep",
    "quip",
    "rhythmic",
    "rogue",
    "sphinx",
    "squawk",
    "swivel",
    "toady",
    "twelfth",
    "unzip",
    "waxy",
    "wildebeest",
    "yacht",
    "zealous",
    "zigzag",
    "zippy", 
    "zombie"
]

var gameWord = [];
var randWord = "";

function chooseWord() {
    var gameArr = [];
    randWord = wordArr[Math.floor(Math.random() * wordArr.length)];
    randWordArr = randWord.split("");
    randWordArr.forEach(function(item) {
        gameArr.push(new Letter(item));
    });
    gameWord = new Word(gameArr);
    guesser();
}

function guesser() {
    inquirer.prompt([
        {
            type: "input-validated",
            message: "Guess a letter!",
            name: "letter",
            validate(guessedLetter) {

                if (guessedLetter < "A" || guessedLetter > "z") {
                    return console.log("Please choose a single letter.");
                }

                else {
                    return true;
                }
            }
        }
    ]).then(answers => {
        var guessLetter = answers.letter.toLowerCase();
        var verify = gameWord.dispW(guessLetter);

        if (verify.trim() === randWord.split("").join(" ")) {
            inquirer.prompt([
                {
                    type: "confirm",
                    message: "You won!  Would you like to play again?",
                    name: "playAgain"
                }
            ]).then(answers => {

                if (answers.playAgain) {
                    randWord = "";
                    chooseWord();
                }

                else {
                    return;
                }
            })
        }

        else {

            guesser();

        }
    });
}

chooseWord();
//end game if word is guessed x
//count guesses, and end game accordingly
//prompt for new game x
//validate that user input is actually a letter x
//make lower case or uppercase letters work x