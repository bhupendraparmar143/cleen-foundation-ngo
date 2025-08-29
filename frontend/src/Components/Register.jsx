import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert('Registered successfully (mock)');
    navigate('/');
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleRegister}>
        <h2>Create an Account</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
        <p className="register-link">
          Already registered?{' '}
          <span onClick={() => navigate('/login')}>Login Here</span>

        </p>
      </form>
    </div>
  );
};

export default Register;