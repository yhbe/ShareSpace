import React from 'react';
import "./Navbar.css";

function Navbar({ loggedInUser }) {
  return (
    <div className="nav-container">
      <div className="nav-inner-container">
        <div className="nav-left-side">
          <p className="nav-title">
          ShareSpace
          </p>
          </div>
        <div className="nav-right-side">
          <div className="nav-user-div">
            <img className='nav-loggedInUser-profile-picture' src={loggedInUser.profilepicture} alt={`${loggedInUser.username}`} />
            <p className="nav-user-username">{loggedInUser.username}</p>
          </div>
          <div className="nav-buttons-container">
            <i className="fa-solid fa-people-group pointer"></i>
            <i className="fa-solid fa-ellipsis pointer"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar