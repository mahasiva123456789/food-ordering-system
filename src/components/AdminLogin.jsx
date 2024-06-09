import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';
import './Header.css'

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'maha' && password === 'maha@2624') {
      navigate('/admin');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <header className="header">
    <div className="nav-container">
      <a href="/">
        <p className="nav-item nav-item-left">Exit</p>
      </a>
    </div>
  </header>
    <div className="admin-login-container">
      <form className="admin-login-form" onSubmit={handleLogin}>
        <h2>Admin Login</h2>
        {error && <p className="admin-login-error">{error}</p>}
        <div className="admin-form-group">
          <label htmlFor="admin-username">Username:</label>
          <input
            type="text"
            id="admin-username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="admin-form-group">
          <label htmlFor="admin-password">Password:</label>
          <input
            type="password"
            id="admin-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="admin-login-button">Login</button>
         </form>
    </div>
    </>
  );
};

export default AdminLogin;
