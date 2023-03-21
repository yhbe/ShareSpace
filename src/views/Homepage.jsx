import React from 'react';
import Navbar from '../components/Navbar';
import UsersAside from '../components/UsersAside';
import "./Homepage.css";
import Login from './Login';

function Homepage({loggedInUser,setloggedInUser, port, allUsers}) {
  if (!loggedInUser) return <Login port={port} setloggedInUser={setloggedInUser}/>;
  
  const showFriendRequests = (friend) => {
    if (friend.receiver === "false" && friend.status === "pending"){
      const user = allUsers.find(user => user._id === friend.userId)

      return (
      <div>
        <p>{user.username} sent you a friend request</p>
        <button>Add</button>
      </div>
      )
    }
  }
  
  const friendRequests = loggedInUser.friends.map(friend => showFriendRequests(friend))

  return (
    <div className="homepage-container">
      <Navbar loggedInUser={loggedInUser} port={port} />
      <main className="align-nav-homepage-container homepage-aside-and-content">
        {friendRequests}
        <UsersAside port={port} allUsers={allUsers} loggedInUser={loggedInUser} />
      </main>
    </div>
  );
}

export default Homepage