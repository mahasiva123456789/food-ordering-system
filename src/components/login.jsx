import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import SignUpPage from './signup';

function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem('username', username); // Store username in local storage
        navigate('/nav'); // Use navigate to go to the homepage
      } else {
        setLoginError(data.message);
      }
    } catch (error) {
      setLoginError('An error occurred. Please try again later.');
    }
  };

  return (
    
    isSignUp ? (
      <SignUpPage />
    ) : (
      <div className="login-container">
        <div className="login-box">
          <div className="login-left">
            <h2>Sign In</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="login-input-container">
                <label htmlFor="login-username">Username</label>
                <input
                  type="text"
                  id="login-username"
                  name="username"
                  placeholder="Username"
                  required
                  autoComplete="username"
                />
              </div>
              <div className="login-input-container">
                <label htmlFor="login-password">Password</label>
                <input
                  type="password"
                  id="login-password"
                  name="password"
                  placeholder="Password"
                  required
                  autoComplete="current-password"
                />
              </div>
              {loginError && <p className="login-error" style={{color:'red'}}>{loginError}</p>} <br />
              <button type="submit" className="login-button">Sign In</button>
              <div className="login-options">
                <label>
                  <input type="checkbox" />
                  Remember Me
                </label>
                <a href="#">Forgot Password</a>
              </div>
            </form>
          </div>
          <div className="login-right">
            <h2>Welcome Back</h2>
            <p>Don't have an account?</p>
            <button className="login-signup-button" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    )
  );
}

export default LoginPage;
