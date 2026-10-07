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

function displayStudents() {
    console.log("--- GRADES ---");
    for (let i = 0; i < students.length; i++) {
        let s = students[i];
        let result = s.score >= 75 ? "Passed" : "Failed";
        console.log(s.name + ": " + s.score + " (" + result + ")");
    }
}

addStudent("Sean", 70);
addStudent("Maria", 88);

displayStudents();