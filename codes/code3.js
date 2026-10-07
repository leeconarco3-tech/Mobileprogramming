class Student {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}

const students = [];

function addStudent(name, score) {
    students.push(new Student(name, score));
}

function updateScore(name, newScore) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].name === name) {
            students[i].score = newScore;
            console.log("\nUpdated " + name + "'s score to " + newScore);
            return;
        }
    }
}

function displayClassSummary() {
    let total = 0;

    console.log("--- STUDENT GRADES ---");
    for (let i = 0; i < students.length; i++) {
        let s = students[i];
        let result = s.score >= 75 ? "Passed" : "Failed";
        total += s.score;
        console.log(s.name + " - " + s.score + " [" + result + "]");
    }

    let average = total / students.length;
    console.log("Class Average: " + average);
}

addStudent("Jun Mark", 70);
addStudent("Maria", 88);
addStudent("John", 90);

displayClassSummary();

updateScore("Jun Mark", 82);

displayClassSummary();