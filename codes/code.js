class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = Number(grade);
    }

    getStatus() {
        if (this.grade >= 75) {
            return "Passed";
        } else {
            return "Failed";
        }
    }
}

const students = [];

function addStudent(name, grade) {
    const newStudent = new Student(name, grade);
    students.push(newStudent);
}

function displayStudents() {
    console.log("=== LISTA TI ESTUDYANTE ===");
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        console.log(`Naran: ${student.name} | Grade: ${student.grade} | Status: ${student.getStatus()}`);
    }
}

addStudent("Jun Mark", 88);
addStudent("Maria", 72);
addStudent("John", 90);

displayStudents();