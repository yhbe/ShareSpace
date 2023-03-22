import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";

function Navbar({ loggedInUser, port }) {
  const [navBarSettings, setNavBarSettings] = useState(false)
  
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await axios.post(`${port}/users/logout`, {}, {
        withCredentials: true
      })
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  };

  const createUserDropdown = () => {
    const ellipsis = document.querySelector(".fa-ellipsis")

    if (ellipsis.classList.contains("active")){
      ellipsis.classList.remove("active")
      setNavBarSettings(false)
    } else ellipsis.classList.add("active")
    
    return (
      <div className="nav-user-dropdown">
        <p className="nav-settings hover-bold">Settings</p>
        <hr />
        <p onClick={() => handleLogout()} className="nav-log-out pointer hover-bold">Log Out</p>
      </div>
    );
  }
  return (
    <div className="nav-container">
      <div className="nav-inner-container align-nav-homepage-container">
        <div className="nav-left-side">
          <p onClick={() => navigate("../ShareSpace")} className="nav-title">ShareSpace</p>
        </div>
        <div className="nav-right-side">
          <div className="nav-user-div">
            <img
              className="nav-loggedInUser-profile-picture"
              onClick={() => navigate(`../ShareSpace/${loggedInUser.id}`)}
              src={loggedInUser.profilepicture}
              alt={`${loggedInUser.username}`}
            />
            <p
              onClick={() => navigate(`../ShareSpace/${loggedInUser.id}`)}
              className="nav-user-username"
            >
              {loggedInUser.username}
            </p>
          </div>
          <div className="nav-buttons-container">
            <div className="relative">
              <i
                onClick={() => setNavBarSettings(true)}
                className="fa-solid fa-ellipsis pointer sizing-button"
              ></i>
              {navBarSettings && createUserDropdown()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar