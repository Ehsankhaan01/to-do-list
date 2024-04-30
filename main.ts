#! /usr/bin/env node
import inquirer from 'inquirer'

let todos = []
let condition = true;




while(condition)

{let todosquestion = await inquirer.prompt([
    {
        name : "firstquestion",
        type : "input",
        message : "what would you like to add in your todos",
    },
    {
        name : "secondquestion",
        type : "confirm",
        message : "what would you like to add in your todos",
        default : "true",
    }
    
]);
todos.push(todosquestion.firstquestion);
console.log(todos)
condition = todosquestion.secondquestion;


}