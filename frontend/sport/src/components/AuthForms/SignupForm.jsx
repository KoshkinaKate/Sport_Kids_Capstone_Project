import React, { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const SignupForm = ({ switchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const { signup } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signup(email, password, username);
    } catch (error) {
      console.error('Signup failed:', error.response.data);
      setError(error.response.data.error || 'Signup failed');
    }
  };

  return (
    <div className="auth-form">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Signup</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p onClick={switchToLogin}>Already have an account? Login here.</p>
    </div>
  );
};

export default SignupForm;


