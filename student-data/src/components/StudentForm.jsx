import "./../styles/StudentForm.css";
import { useState } from "react";

function StudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [marks, setMarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { name, roll, class: studentClass, marks };
    onAddStudent(newStudent); // parent component ko data bhej do
    setName("");
    setRoll("");
    setStudentClass("");
    setMarks("");
  };

  return (
    <div className="form-container">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
        <input value={roll} onChange={(e) => setRoll(e.target.value)} type="text" placeholder="Roll No" />
        <input value={studentClass} onChange={(e) => setStudentClass(e.target.value)} type="text" placeholder="Class" />
        <input value={marks} onChange={(e) => setMarks(e.target.value)} type="number" placeholder="Marks" />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default StudentForm;

