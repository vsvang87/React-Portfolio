import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  fontSize: "1rem",
  color: "black",
};
const boldStyle = {
  fontWeight: "550",
  fontSize: "1.5rem",
};
function Navbar() {
  return (
    <div className="navbar-container">
      <div className="container">
        <nav className="navbar">
          <div className="logo" style={boldStyle}>
            V.V.
          </div>
          <ul className="nav-menu">
            <li>
              <Link to="/" style={linkStyle}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" style={linkStyle}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/project" style={linkStyle}>
                Project
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
