import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Register';
import Apps from './Apps';
import Login from './Login';
import Landing_Page from './Landing_Page.js';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing_Page />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Landing_Page" element={<Landing_Page />} />
        <Route path="/Register" element={<Register />} />

      </Routes>
    </Router>
  );
};

export default App;
