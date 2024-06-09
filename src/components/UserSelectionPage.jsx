import React from 'react';
import { Link } from 'react-router-dom';
import './UserSelectionPage.css';
import userIcon from './user-icon.png';
import adminIcon from './admin-icon.png';

const UserSelectionPage = () => {
  return (
    <div className="selection-container">
        <div className="selection-container1">
      <h1>Welcome!</h1>
      <p>Please select your role</p>
      </div>
      <div className="role-container">
        <Link to="/signin" className="role-link">
          <div className="role-card">
            <img src={userIcon} alt="User" className="role-icon" />
            <p>User</p>
          </div>
        </Link>
        <Link to="/adminlog" className="role-link">
          <div className="role-card">
            <img src={adminIcon} alt="Admin" className="role-icon" />
            <p>Admin</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserSelectionPage;
