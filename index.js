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
var guessNum = 10;

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
                    console.log("Please choose a letter.");
                }

                else if (guessedLetter.length > 1) {
                    console.log("Just one letter please.");
                }

                else {
                    return true;
                }
            }
        }
    ]).then(answers => {
        var guessLetter = answers.letter.toLowerCase();
        var intermediate = gameWord.dispW(guessLetter);
        var verify = intermediate[0];
        var guessUpdate = intermediate[1];
        // console.log(verify, (verify.trim().match(/_/g) || []).length, (parseInt(guessUpdate)));
        // var verify = gameWord.dispW(guessLetter);

        if (verify.trim().length === (parseInt(guessUpdate)*2)-1) {
            guessNum -= 1;
            console.log(`Wrong!!!  You have ${guessNum} guesses remaining.`);
        }

        else {
            console.log(`Correct!!! You have ${guessNum} guesses remaining.`);
        }

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
                    guessNum = 10;
                    chooseWord();
                }

                else {
                    return;
                }
            })
        }

        else if (parseInt(guessNum) === 0) {
            inquirer.prompt([
                {
                    type: "confirm",
                    message: `You're out of guesses!  You lose.  The word was ${randWord} Would you like to play again?`,
                    name: "playAgain"
                }
            ]).then(answers => {

                if (answers.playAgain) {
                    randWord = "";
                    guessNum = 10;
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
//count guesses x
//prompt for new game x
//validate that user input is actually a letter x
//make lower case or uppercase letters work x
//output correct answer if user loses x
//end game if number of guesses = 0 x
//make sure only one letter can be input, currently whole string works x
//when invalid input is used it is shown, remove this
//see if letter has already been guessed and display warning message
