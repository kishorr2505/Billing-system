import React from 'react'
import './Login.css';
import loginImage from "./login-image.jpg";
const Login = () => {
  return (
    <div className="login-card">
      <div> <img className="image"  src={loginImage} alt="image"/>

      </div>
      <div className="form-section">
        <h1 className="welcome" >Welcome Back</h1>
        <label>Enter Mobile Number</label>
        <input type="text" className="input-box" />
        <label>Enter Password</label>
        <input type="password" className="input-box" />
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default Login;