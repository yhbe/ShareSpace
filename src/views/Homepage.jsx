import React from 'react';
import Navbar from '../components/Navbar';
import UsersAside from '../components/UsersAside';
import Login from './Login';

function Homepage({loggedInUser,setloggedInUser, port, allUsers}) {
  if (!loggedInUser) return <Login port={port} setloggedInUser={setloggedInUser}/>;
  
  return (
    <div>
      <Navbar loggedInUser={loggedInUser} port={port}/>
      <UsersAside allUsers={allUsers} loggedInUser={loggedInUser}/>
      Hello {loggedInUser.username}
      </div>
  )
}

export default Homepage