class Task {
    constructor(title) {
        this.title = title;
        this.isDone = false;
    }
}

const todoList = [];

function addTask(title) {
    todoList.push(new Task(title));
}

function completeTask(title) {
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].title === title) {
            todoList[i].isDone = true;
            console.log("\nCompleted: " + title);
            return;
        }
    }
}

function displayTasks() {
    console.log("--- TODO LIST ---");
    for (let i = 0; i < todoList.length; i++) {
        let t = todoList[i];
        let status = t.isDone ? "Done" : "Pending";
        console.log((i + 1) + ". " + t.title + " [" + status + "]");
    }
}

addTask("Study Node.js");
addTask("Clean room");
addTask("Do homework");

displayTasks();

completeTask("Study Node.js");

displayTasks();