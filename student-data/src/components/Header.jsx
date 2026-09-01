import { Link } from "react-router-dom";
import "./../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Student Management System</div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/add-student">Add Student</Link></li>
          <li><Link to="/students">Student List</Link></li>
          <li><Link to="/about">About Us</Link></li>
         
        </ul>
      </nav>
    </header>
  );
}

export default Header;
