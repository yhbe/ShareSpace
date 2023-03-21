import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./UserAside.css";

function UsersAside({allUsers, loggedInUser}) {
  const navigate = useNavigate()
  
  const createFollowUserJSX = (user) => {
    if (user._id === loggedInUser.id) {
      return
    }
    
    return (
      <div className="users-aside-user-container" key={user._id}>
        <div className="users-aside-left-side">
          <img
            onClick={() => navigate(`../ShareSpace/${user._id}`)}
            className="clickable"
            src={user.profilepicture}
            alt={user.username}
          />
          <div className="users-username-container">
            <p
              onClick={() => navigate(`../ShareSpace/${user._id}`)}
              className="user-aside-username clickable"
            >
              {user.username}
            </p>
          </div>
        </div>
        <div className="users-aside-right-side-add-icon-container">
          <i className="fa-solid fa-user-plus clickable"></i>
        </div>
      </div>
    );
  }

  return (
    <div className='useraside-main-container'>
      <h1 className='useraside-all-new-users-text'>New Users</h1>
      {!allUsers && <h1>Loading...</h1>}
      {allUsers && allUsers.map(user => createFollowUserJSX(user))}
    </div>
  )
}

export default UsersAside