var inquirer = require("inquirer");
var word = require("./word");
var letter = require("./letter");

inquirer.prompt([
    {
        type: "input",
        message: "Guess a letter!",
        name: "letter"
    }
]).then(answers => {
    console.log(answers);
});