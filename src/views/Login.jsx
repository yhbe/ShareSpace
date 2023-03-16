import React from 'react';
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-inner-container">
        <div className="login-inner-container-left-side">
          <h1 className="login-title-text">sharespace</h1>
          <p className="login-left-side-small-text">
            Connect with friends and the world around you on ShareSpace
          </p>
        </div>
        <div className="login-inner-container-right-side">
          <form action="" className="login-form">
            <ul>
              <li>
                <label htmlFor="username"></label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className="login-input"
                />
              </li>
              <li>
                <label htmlFor="password"></label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="login-input"
                />
              </li>
              <button className="login-button-log-in">Log In</button>
              <p className="login-forgot-password">Forgot password?</p>
              <hr className='login-hr'/>
            </ul>
            <button className="login-create-new-account">
              Create new account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login