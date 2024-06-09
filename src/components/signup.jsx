import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (password.length < 4) {
      setError('Password must be at least 4 characters long!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });
      const data = await response.json();
      if (data.success) {
        setError('');
        setFormData({ username: '', email: '', password: '', confirmPassword: '' });
        localStorage.setItem('username', username); // Store username in localStorage
        navigate('/nav');
      } else {
        setError(`Registration failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Registration failed!');
    }
  };

  return (
    <>
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-left">
          <h2>Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="signup-input-container">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="signup-input-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="signup-input-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="signup-input-container">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
        </div>
        <div className="signup-right">
          <h2>Welcome to SignUp</h2>
          <p>Already have an account?</p>
          <a href="/login"><button className="signin-button">Sign In</button></a>
        </div>
      </div>
    </div>
    </>
  );
}

export default SignUpPage;
