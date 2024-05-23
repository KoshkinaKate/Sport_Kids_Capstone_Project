import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">PlayFit</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sports">Sports</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/forum">Forum</Link></li>
      </ul>
      <div className="auth-links">
        <Link to="/login">Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar;


