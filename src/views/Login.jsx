import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({setloggedInUser, port}) {
  const navigate = useNavigate();
  const [showSignUp, setShowSignUp] = useState(false);
  const [signUpData, setSignUpData] = useState({
    fullname: "",
    username: "",
    emailaddress: "",
    password: "",
  })

  // Listen for the popstate event to detect when the user clicks the back button to remove sign-up form and re-show login.
  useEffect(() => {
    const handlePopstate = () => {
      setShowSignUp(false);
    };
    window.addEventListener("popstate", handlePopstate);
    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  // Redirect to login if refresh on sign-up page
  useEffect(() => {
    if (window.location.pathname === "/ShareSpace/sign-up") {
      navigate("../ShareSpace");
    }
  }, []);

  const handleChange = (e) => {
    const {name, value} = e.target
    setSignUpData(prevState => {
      return {...prevState, [name]: value}
    })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`${port}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData)
      })
      if (response.ok){
        navigate(`../ShareSpace/${signUpData.username}`)
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  const createSignUpForm = () => {
    window.history.pushState({}, "", "/ShareSpace/sign-up");

    return (
      <div className="login-inner-container-right-side">
        <form onSubmit={(e) => handleFormSubmit(e)} className="login-form">
          <ul className="signup-ul">
            <li>
              <label htmlFor="fullname"></label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="login-input"
                placeholder="Full name"
                onChange={(e) => handleChange(e)}
                required
              />
            </li>
            <li>
              <label htmlFor="username"></label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="login-input"
                onChange={(e) => handleChange(e)}
                required
              />
            </li>
            <li>
              <label htmlFor="emailaddress"></label>
              <input
                type="email"
                name="emailaddress"
                id="emailaddress"
                className="login-input"
                placeholder="Email Address"
                autoComplete="email-address"
                onChange={(e) => handleChange(e)}
                required
              />
            </li>
            <li>
              <label htmlFor="password"></label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="login-input"
                autoComplete="new-password"
                onChange={(e) => handleChange(e)}
                required
              />
            </li>
            <button type="submit" className="login-button-log-in">
              Sign Up
            </button>
          </ul>
        </form>
      </div>
    );
  };

  const handleLoginForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    axios
      .post(`${port}/users/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true
      })
      .then((response) => {
        if (response.status === 200) {
          const { user } = response.data;
          setloggedInUser(user)
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };



  const createLoginForm = () => {
    return (
      <>
        <div className="login-inner-container-right-side">
          <form onSubmit={(event) => handleLoginForm(event)} className="login-form">
            <ul>
              <li>
                <label htmlFor="username"></label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className="login-input"
                  required
                />
              </li>
              <li>
                <label htmlFor="password"></label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="login-input"
                  autoComplete="new-password"
                  required
                />
              </li>
              <button className="login-button-log-in">Log In</button>
              <p className="login-forgot-password">Forgot password?</p>
              <hr className="login-hr" />
            </ul>
            <button
              onClick={() => setShowSignUp(true)}
              className="login-create-new-account"
            >
              Create new account
            </button>
          </form>
        </div>
      </>
    );
  };

  return (
    <div className="login-container">
      <div className="login-inner-container">
        <div className="login-inner-container-left-side">
          <h1 className="login-title-text">sharespace</h1>
          <p className="login-left-side-small-text">
            Connect with friends and the world around you on ShareSpace
          </p>
        </div>
        {!showSignUp && createLoginForm()}
        {showSignUp && createSignUpForm()}
      </div>
    </div>
  );
}

export default Login