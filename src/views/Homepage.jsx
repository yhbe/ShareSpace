import React from 'react';
import Navbar from '../components/Navbar';
import UsersAside from '../components/UsersAside';
import "./Homepage.css";
import Login from './Login';

function Homepage({loggedInUser,setloggedInUser, port, allUsers}) {
  if (!loggedInUser) return <Login port={port} setloggedInUser={setloggedInUser}/>;
  
  return (
    <div className="homepage-container">
      <Navbar loggedInUser={loggedInUser} port={port} />
      <main className="align-nav-homepage-container">
        Hello {loggedInUser.username}
        <UsersAside allUsers={allUsers} loggedInUser={loggedInUser} />
      </main>
    </div>
  );
}

export default Homepage