import React from 'react';
import Login from './Login';

function Homepage({loggedInUser,setloggedInUser, port}) {
  if (!loggedInUser) return <Login port={port} setloggedInUser={setloggedInUser}/>;
  
  return (
    <div>Hello {loggedInUser.username}</div>
  )
}

export default Homepage