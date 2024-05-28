import React, { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const LoginForm = ({ switchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      // Close the modal or redirect
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <p onClick={switchToSignup}>Don't have an account? Sign up here.</p>
    </div>
  );
};

export default LoginForm;
