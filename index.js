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

function chooseWord() {
    var gameArr = [];
    var randWord = wordArr[Math.floor(Math.random() * wordArr.length)].split("");
    randWord.forEach(function(item) {
        gameArr.push(new Letter(item));
    });
    gameWord = new Word(gameArr);
    guesser();
}

function guesser() {
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter!",
            name: "letter"
        }
    ]).then(answers => {
        gameWord.dispW(answers.letter);
        guesser();
    });
}

chooseWord();