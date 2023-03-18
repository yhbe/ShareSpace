import React from 'react';
import Navbar from '../components/Navbar';
import Login from './Login';

function Homepage({loggedInUser,setloggedInUser, port}) {
  if (!loggedInUser) return <Login port={port} setloggedInUser={setloggedInUser}/>;
  
  return (
    <div>
      <Navbar loggedInUser={loggedInUser}/>
      Hello {loggedInUser.username}
      </div>
  )
}

export default Homepage