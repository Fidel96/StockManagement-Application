// Dashboard.jsx

import React, { useState } from 'react';
import axios from 'axios';
import './Dashboard.css'; // Import CSS file for Dashboard styles

const Dashboard = () => {
  
  



  return (
    <div className="Dashboard">
      <header className="header">
        
          <h1>Stock Management System</h1>
    
        <nav className="navigation">
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/inventory">Inventory</a></li>
            <li><a href="/orders">Orders</a></li>
            <li><a href="/reports">Reports</a></li>
            <li><a href="/settings">Settings</a></li>
          </ul>
        </nav>
        <div className="user-profile">
          <span>User Name</span> {/* Replace with actual user name */}
          <div className="dropdown-content">
            <a href="/profile">Profile</a>
            <a href="/logout">Logout</a>
          </div>
        </div>
      </header>

      <main className="main-content">
        {/* Dashboard Overview */}
        <section className="dashboard-overview">
          <h2>Dashboard Overview</h2>
          {/* Replace with actual dashboard content */}
          <p>Metrics and graphs go here...</p>
        </section>

        {/* Quick Links */}
        <section className="quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/manage-inventory">Manage Inventory</a></li>
            <li><a href="/view-orders">View Orders</a></li>
            <li><a href="/generate-reports">Generate Reports</a></li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 Stock Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
