import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async () => {
    try {
      const response = await axios.post('http://localhost:3008/register', { email, password });
      console.log('User registered successfully:', response.data);
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error('Error registering user:', err);
    }
  };

  return (
    <div className="Login"> {/* Using Login class for consistent styling */}
    <h1>Register</h1>
    <div className="form">
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={registerUser}>Register</button>
    </div>
  </div>
  );
};

export default Register;