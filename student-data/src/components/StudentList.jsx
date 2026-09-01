import "./../styles/StudentList.css";

function StudentList({students}) {
  return (
    <div className="list-container">
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Class</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr key={index}>
              <td>{s.name}</td>
              <td>{s.roll}</td>
              <td>{s.class}</td>
              <td>{s.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
