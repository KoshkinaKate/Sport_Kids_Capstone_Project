import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user } = useContext(AuthContext); //access the values that are provided by the AuthProvider component and extracting user

  return (
    <nav className="navbar">
      <div className="logo">PlayFit</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sports">Sports</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/forum">Forum</Link></li>
        <li><Link to="/join-us">Join Us</Link></li>
      </ul>
      {user && <Link to="/my-account">My Account</Link>}
    </nav>
  );
};

export default Navbar;





