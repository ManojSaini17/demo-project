import "./../styles/global.css";

function Dashboard({ students }) {
  const totalStudents = students.length;

  // Average marks calculation
  const averageMarks =
    totalStudents > 0
      ? (
          students.reduce((sum, s) => sum + Number(s.marks), 0) / totalStudents
        ).toFixed(2)
      : 0;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats">
        <div className="card">
          <h2>Total Students</h2>
          <p>{totalStudents}</p>
        </div>
        <div className="card">
          <h2>Average Marks</h2>
          <p>{averageMarks}%</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

