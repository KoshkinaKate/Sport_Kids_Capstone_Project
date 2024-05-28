import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Modal from "../Modal/Modal";
import LoginForm from "../AuthForms/LoginForm";
import SignupForm from "../AuthForms/SignupForm";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleClose = () => setShowModal(false);
  const handleShowLogin = () => {
    setIsLogin(true);
    setShowModal(true);
  };
  const handleShowSignup = () => {
    setIsLogin(false);
    setShowModal(true);
  };

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
      {/* <div className="auth-links">
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <>
            <button onClick={handleShowLogin}>Sign In</button>
            <button onClick={handleShowSignup}>Sign Up</button>
          </>
        )}
      </div> */} 

      <Modal show={showModal} handleClose={handleClose}>
        {isLogin ? <LoginForm switchToSignup={handleShowSignup} /> : <SignupForm switchToLogin={handleShowLogin} />}
      </Modal>
    </nav>
  );
};

export default Navbar;



