
let students = [
    { id: 1, name: "Aarav", marks: 85 },
    { id: 2, name: "Priya", marks: 92 },
    { id: 3, name: "Rahul", marks: 76 }
];

// Add Student
function addStudent(id, name, marks) {
    students.push({ id, name, marks });
    console.log("Student Added Successfully!");
}

// Display Students
function displayStudents() {
    console.log("\n--- Student Records ---");

    students.forEach(s => {
        console.log("ID:", s.id);
        console.log("Name:", s.name);
        console.log("Marks:", s.marks);
        console.log("-------------------");
    });
}

// Search Student
function searchStudent(id) {
    let student = students.find(s => s.id === id);

    if (student) {
        console.log("\nStudent Found!");
        console.log("Name:", student.name);
        console.log("Marks:", student.marks);
    } else {
        console.log("Student Not Found!");
    }
}

// Update Student Marks
function updateMarks(id, newMarks) {
    let student = students.find(s => s.id === id);

    if (student) {
        student.marks = newMarks;
        console.log("Marks Updated Successfully!");
    } else {
        console.log("Student Not Found!");
    }
}

// Delete Student
function deleteStudent(id) {
    let oldLength = students.length;

    students = students.filter(s => s.id !== id);

    if (students.length < oldLength) {
        console.log("Student Deleted Successfully!");
    } else {
        console.log("Student Not Found!");
    }
}

// Calculate Average
function calculateAverage() {
    let total = 0;

    students.forEach(s => {
        total += s.marks;
    });

    let average = total / students.length;

    console.log("Average Marks:", average.toFixed(2));
}

// Execute Operations
displayStudents();

addStudent(4, "Neha", 88);

searchStudent(2);

updateMarks(1, 95);

deleteStudent(3);

displayStudents();

calculateAverage();
