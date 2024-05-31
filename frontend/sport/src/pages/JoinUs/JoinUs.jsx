import React, { useState } from "react";
import LoginForm from "../../components/AuthForms/LoginForm";
import SignupForm from "../../components/AuthForms/SignupForm";
import "./JoinUs.css";

const JoinUs = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchToSignup = () => setIsLogin(false); //switch the view to the signup form.
  const switchToLogin = () => setIsLogin(true);

  return (
    <div className="join-us">
      {isLogin ? (
        <LoginForm switchToSignup={switchToSignup} onSuccess={() => {}} /> //renders component
      ) : (
        <SignupForm switchToLogin={switchToLogin} onSuccess={() => {}} />
      )}
    </div>
  );
};

export default JoinUs;
