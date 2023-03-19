import React from 'react'
import "./UserAside.css"

function UsersAside({allUsers, loggedInUser}) {
  
  const createFollowUserJSX = (user) => {
    if (user._id === loggedInUser.id) {
      return
    }
    
    return (
      <div className='users-aside-user-container' key={user._id}>
      <img src={user.profilepicture} alt={user.username} />
      <p className="user-aside-username">{user.username}</p>
      </div>
    )
  }

  return (
    <div>
      {!allUsers && <h1>Loading...</h1>}
      {allUsers && allUsers.map(user => createFollowUserJSX(user))}
    </div>
  )
}

export default UsersAside