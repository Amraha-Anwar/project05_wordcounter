#! /usr/bin/env node
import inquirer from "inquirer";
console.log(`\n\t"Hey there! WELCOME TO  MY PROJECT"\t\n`);
const user_answer = await inquirer.prompt([
    {
        name: "userInput",
        type: "input",
        message: "Enter your input to count the words.."
    }
]);
let words = user_answer.userInput.trim().split(" ");
console.log(words);
console.log(`There are ${words.length} words in your given input.`);
