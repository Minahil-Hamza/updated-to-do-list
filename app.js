#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
//print Welcome Message :
console.log(chalk.bold.rgb(204, 204, 204)(`\n \t\t <<<======================================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<===========>> $('WELCOME TO \'MINAHIL CODING WORLD\')`));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t <<<=========================================>>>`));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([{
                name: "choice",
                type: "list",
                messsge: "select an option you want to do",
                choices: ["Add Task", "Delete task", "Update Task", "View Todo-List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([{
            name: "task",
            type: "input",
            message: "Enter your new task",
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-List`);
};
//function to view all Todo-List Task:
let viewTask = () => {
    console.log("\n Your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
// Function to delete a task from List :
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([{
            name: "index",
            type: "number",
            message: "Enter the 'index no'. of the task you want to delete:",
        }
    ]);
    let deleteTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deleteTask} this task has been deleted sucessfully from your Todo-List\n`);
};
// Function to Update the task ;
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of the task you want to update :"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name :",
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at index no. ${update_task_index.index - 1} update successfully [For updated list check option: "view Todo-List"]`);
};
main();
