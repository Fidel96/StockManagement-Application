import React from 'react';
import './Landing_Page.css'; // We'll create this CSS file for styling
import { useNavigate } from 'react-router-dom';
import background from './back.png'; // Adjust the path based on the location of your image

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/Login');
  }

  return (
    <div className="landing-page" style={{ backgroundImage: `url(${background})` }}>
      <header className="header">
        <h1>Stock Management System</h1>
        <p>Your efficient solution to manage stocks and inventory.</p>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Real-time Tracking</h2>
          <p>Keep track of your stock levels in real-time with our advanced monitoring system.</p>
        </div>
        <div className="feature">
          <h2>Analytics & Reports</h2>
          <p>Get detailed insights and reports on your stock performance.</p>
        </div>
        <div className="feature">
          <h2>User Management</h2>
          <p>Manage user roles and permissions efficiently.</p>
        </div>
      </section>
      <button className="get-started" onClick={handleGetStarted}>Do you want to do stock management?</button>
      <footer className="footer">
        <p>© 2024 Stock Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
