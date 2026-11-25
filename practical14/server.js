const express = require("express");
const app = express();

//middleware for json data
app.use(express.json());

//student records
let students = [
    { id: 1, name: "Aarav", marks: 85 },
    { id: 2, name: "Priya", marks: 90 }
];

//GET
app.get('/students', (req, res) => {
    res.json(students);
});

app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);
    res.send(student)
});

//POST
app.post('/students', (req, res) => {
    const student = { "id": students.length + 1, "name": req.body.name, "marks": req.body.marks }
        ;
    students.push(student);
    res.send("Pushed successfuly");
})


//PUT
app.put('/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);

    if (!student) {
        return res.send("Student not found");
    }

    student.name = req.body.name;
    student.marks = req.body.marks;

    res.send("Uploaded successfully");
})

//delete
app.delete('/students/:id', (req, res) => {
    students = students.filter(s => s.id !== Number(req.params.id));
    res.send("Deleted Successfuly");
});

//server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})