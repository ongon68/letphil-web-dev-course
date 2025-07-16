const students = [];

// Add student
function addStudent(name, grade) {
    students.push ({name, grade});
}

// Remove Student
function removeStudent(name) {
    const index = students.findIndex(student => student.name === name);
    if (index !== -1) {
        students.splice(index, 1);
        console.log("Student has been removed");
    }
    else {
        console.log("Name was not found.")
    }
}

// Filter Top Students
function filterTopStudents(minGrade) {
    return students.filter(student => student.grade >= minGrade);
}

// Map Studnets into Formatted List
function formatStudentList() {
    return students.map(student => `${student.name} - Grade:${student.grade}`)
}

// Start
console.log("Students = ", students);

// Add Students
addStudent("Alice", 85);
addStudent("Bob", 90);
addStudent("Charles", 78);
addStudent("Dave", 60);
addStudent("Emma", 92);

console.log("Student List:");
console.log(formatStudentList());

removeStudent("Charles");

console.log("Student List:");
console.log(formatStudentList());

console.log("Students with grade equal to or higher than 80: ");
console.log(filterTopStudents(80));