import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate('/Register');
  };
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3008/login', { email, password });
      console.log('Login successful:', response.data);
      // Handle successful login, e.g., redirect to dashboard
    } catch (err) {
      if (err.response) {
        // Server responded with a status code outside the 2xx range
        setError(`Login error: ${err.response.status} - ${err.response.data}`);
      } else if (err.request) {
        // No response received from server
        setError('Login error: No response received from server');
      } else {
        // Error setting up the request
        setError(`Login error: ${err.message}`);
      }
    }
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <div className="links">
        <p>Sign up if you are not registered</p>
        <button className="signup-button" onClick={handleSignUp}>Sign Up</button>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;
