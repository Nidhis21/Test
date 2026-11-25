
import React, { useState } from "react";
import "./App.css";

// Student Form Component
function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [dept, setDept] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !roll || !dept) {
      alert("Please fill all fields");
      return;
    }

    addStudent({ id: Date.now(), name, roll, dept });

    setName("");
    setRoll("");
    setDept("");
  }

  return (
    <div className="form-box">
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Roll Number"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
        />

        <input
          placeholder="Department"
          value={dept}
          onChange={(e) => setDept(e.target.value)}
        />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

// Main Component
function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "shree", roll: "1", dept: "CSE" }
  ]);

  const [search, setSearch] = useState("");

  function addStudent(student) {
    setStudents([...students, student]);
  }

  function deleteStudent(id) {
    setStudents(students.filter(s => s.id !== id));
  }

  // Search Student
  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.roll.includes(search)
  );

  return (
    <div className="app">
      <h1>Student Profile Management</h1>

      <StudentForm addStudent={addStudent} />

      <h2>Student Profiles</h2>
      <h3>Total Students: {students.length}</h3>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name or roll number"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="student-list">
        {filteredStudents.length > 0 ? (
          filteredStudents.map(s => (
            <div className="student-card" key={s.id}>
              <h3>{s.name}</h3>
              <p>Roll No: {s.roll}</p>
              <p>Department: {s.dept}</p>

              <button onClick={() => deleteStudent(s.id)}>
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No students found</p>
        )}
      </div>
    </div>
  );
}

export default App;
