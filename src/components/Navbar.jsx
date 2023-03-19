import React, { useState } from 'react';
import "./Navbar.css";

function Navbar({ loggedInUser }) {
  const [navBarSettings, setNavBarSettings] = useState(false)

  const createUserDropdown = () => {
    const ellipsis = document.querySelector(".fa-ellipsis")

    if (ellipsis.classList.contains("active")){
      ellipsis.classList.remove("active")
      setNavBarSettings(false)
    } else ellipsis.classList.add("active")
    
    return (
      <div className="nav-user-dropdown">
        <p className="nav-settings pointer hover-bold">Settings</p>
        <hr />
        <p className="nav-log-out pointer hover-bold">Log Out</p>
      </div>
    );
  }
  return (
    <div className="nav-container">
      <div className="nav-inner-container">
        <div className="nav-left-side">
          <p className="nav-title">ShareSpace</p>
        </div>
        <div className="nav-right-side">
          <div className="nav-user-div">
            <img
              className="nav-loggedInUser-profile-picture"
              src={loggedInUser.profilepicture}
              alt={`${loggedInUser.username}`}
            />
            <p className="nav-user-username">{loggedInUser.username}</p>
          </div>
          <div className="nav-buttons-container">
            <div className="relative">
            <i className="fa-solid fa-people-group pointer relative sizing-button"></i>
            </div>
            <div className='relative'>
            <i
              onClick={() => setNavBarSettings(true)}
              className="fa-solid fa-ellipsis pointer sizing-button"
            >
            </i>
            {navBarSettings && createUserDropdown()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar