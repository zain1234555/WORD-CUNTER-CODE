#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.italic.rgb(222,54,982)("\n\t\t>>>>>>>>/WELCOME TO ZAIN WORD COUNTER MACHINE/<<<<<<<<\n "));

let answers = await inquirer.prompt(
    [
        {
            name : "comment",
            type : "input",
            message :chalk.bold.rgb(50,210,600)("Write The Comment In Order Of Unit Count :"),
        }
    ]
);

let words = answers.comment.trim().split(" ");

console.log(chalk.italic.rgb(30,0,200)(`\n\t[${words}] \n`));

console.log(chalk.italic.bold.rgb(587,90,782)(`\n\tYour Comment Unit Count Is : ${words.length}\n`));

console.log(chalk.bold.italic.rgb(76,346,80)("\n\t\t\t****************>THANK YOU ZAIN<****************\n "));