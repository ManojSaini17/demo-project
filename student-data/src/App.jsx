import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard students={students} />} />
        <Route path="/add-student" element={<StudentForm onAddStudent={addStudent} />} />
        <Route path="/students" element={<StudentList students={students} />} />
        <Route path="/about" element={<AboutUs />} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;




