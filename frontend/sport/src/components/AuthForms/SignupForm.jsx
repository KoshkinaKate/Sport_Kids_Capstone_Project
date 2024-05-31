import React, { useState, useContext } from 'react'; 
import { useNavigate } from 'react-router-dom'; // hook for navigation
import AuthContext from '../../context/AuthContext'; 

const SignupForm = ({ switchToLogin }) => { // SignupForm component accepting a prop to switch to the login form
  const [email, setEmail] = useState(''); // State for the email input
  const [password, setPassword] = useState(''); //  password input
  const [username, setUsername] = useState(''); //  username input
  const [error, setError] = useState(''); // error handling
  const { signup } = useContext(AuthContext); // Accessing the signup function from AuthContext
  const navigate = useNavigate(); // Initializing the useNavigate hook for navigation

  const handleSubmit = async (e) => { 
    e.preventDefault(); // Prevent the default form submission behavior
    setError(''); // Clear any existing errors
    try {
      await signup(email, password, username); 
      navigate('/'); // Navigate to the home page upon successful signup
    } catch (error) {
      console.error('Signup failed:', error.response.data); 
      setError(error.response.data.error || 'Signup failed'); 
    }
  };

  return (
    <div className="auth-form"> 
      <h2>Signup</h2> 
      <form onSubmit={handleSubmit}> {/* Form element with submission handler */}
        <label>Email:</label> 
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        /> {/* Input for email with onChange handler to update state */}
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
        <button type="submit">Signup</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p onClick={switchToLogin}>Already have an account? Login here.</p> 
    </div>
  );
};

export default SignupForm; 

