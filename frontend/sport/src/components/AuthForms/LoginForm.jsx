import React, { useState, useContext } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import AuthContext from '../../context/AuthContext'; 

const LoginForm = ({ switchToSignup }) => { // LoginForm component accepting a prop to switch to the signup form
  const [username, setUsername] = useState(''); // State for the username input
  const [password, setPassword] = useState(''); // State for the password input
  const { login } = useContext(AuthContext); // Accessing the login function from AuthContext
  const navigate = useNavigate(); // Initializing the useNavigate hook for navigation

  const handleSubmit = async (e) => { 
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      await login(username, password); // Attempt to log in with the provided username and password
      navigate('/'); // Navigate to the home page upon successful login
    } catch (error) {
      console.error('Login failed:', error); 
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2> 
      <form onSubmit={handleSubmit}> {/* Form element with submission handler */}
        <label>Username:</label> 
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        /> {/* Input for username with onChange handler to update state */}
        <label>Password:</label> 
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        /> {/* Input for password with onChange handler to update state */}
        <button type="submit">Login</button> 
      </form>
      <p onClick={switchToSignup}>Don't have an account? Sign up here.</p> 
    </div>
  );
};

export default LoginForm; 

