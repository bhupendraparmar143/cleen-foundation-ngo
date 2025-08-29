import React from 'react'
import { useNavigate } from 'react-router-dom';
import donationImage from "../assets/donation.png"

import '../styles/Login.css'

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = React.useState({
    email: '',
    password: ''
  });

  const loginInputHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }
  const handleLogin = (e) => {
    e.preventDefault();
    alert('Login successful (mock)');
    console.log(loginData)
  };

  return (
    <div className="login-page" style={{ backgroundImage: `url(${donationImage})` }}>
      <div className="login-overlay" />

      <div className="login-box">
        <h2>Login to Your Account</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <label>Email</label>
          <input type="email" name='email' onChange={loginInputHandler} placeholder="you@example.com" required />

          <label>Password</label>
          <input type="password" name='password' onChange={loginInputHandler} placeholder="Enter your password" required />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;