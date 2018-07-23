var inquirer = require("inquirer");
var word = require("./word");
var letter = require("./letter");

var wordArr = [
    "awkward",
    "bagpipes",
    "banjo",
    "bungler",
    "croquet",
    "crypt",
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

var gameWord = "";

function chooseWord() {
    gameWord = wordArr[Math.floor(Math.random() * wordArr.length)];
    //store gameWord with word.js constructor
    //then call next function
}

inquirer.prompt([
    {
        type: "input",
        message: "Guess a letter!",
        name: "letter"
    }
]).then(answers => {
    console.log(answers);
});

chooseWord();