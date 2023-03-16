import React from 'react'
import Login from './Login'

function Homepage({loggedIn, port}) {
  if (!loggedIn) return (<Login port={port}/>)
  
  return (
    <div>Homepage</div>
  )
}

export default Homepage