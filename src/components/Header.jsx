import React, { useState, useEffect } from 'react';
import './Header.css';
import login from './login.png';

const Header = ({ cartItemCount }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername('');
    window.location.href = '/signin';
  };

  return (
    <header className="header">
      <div className="nav-container">
        <a href="/nav">
          <p className="nav-item nav-item-left">Home</p>
        </a>
        <div className="nav-right">
          <a href="#">
            <a href="/adminlog"><p className="nav-item">Admin</p></a>
          </a>
          <div className="profile-container">
            <p className="nav-item profile">Profile</p>
            <div className="profile-dropdown">
              <img src={login} style={{ width: '75px', height: '50px', paddingLeft: '22px' }} alt="Profile" />
              <p className="username" style={{ paddingLeft: '22px' }}>{username}</p>
              <button onClick={handleLogout} className="logout-button">Logout</button>
            </div>
          </div>
          <a href="/cart"><p className="nav-item">Cart <span style={{ color: 'green' }}>{cartItemCount > 0 && `(${cartItemCount})`}</span></p></a>
          <a href="/history"><p className="nav-item">Orders</p></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
