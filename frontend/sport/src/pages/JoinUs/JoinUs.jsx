// src/pages/JoinUs/JoinUs.jsx
import React, { useState, useContext } from "react";
import LoginForm from "../../components/AuthForms/LoginForm";
import SignupForm from "../../components/AuthForms/SignupForm";
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import "./JoinUs.css";

const JoinUs = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const switchToSignup = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  const handleSuccess = (user) => {
    setUser(user); // Ensure the user state is updated immediately
    navigate('/'); // Navigate to the home page after successful signup or login
  };

  return (
    <div className="join-us">
      {isLogin ? (
        <LoginForm switchToSignup={switchToSignup} onSuccess={handleSuccess} />
      ) : (
        <SignupForm switchToLogin={switchToLogin} onSuccess={handleSuccess} />
      )}
    </div>
  );
};

export default JoinUs;

