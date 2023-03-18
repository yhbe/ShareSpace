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
            <img src="" alt="" />
            <p className="nav-user-username">{loggedInUser.username}</p>
          </div>
          <div className="nav-buttons-container">
            <i className="fa-solid fa-people-group"></i>
            <i class="fa-solid fa-ellipsis"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar