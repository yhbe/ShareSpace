import React from 'react'
import Login from './Login'

function Homepage({loggedIn}) {
  if (!loggedIn) return (<Login/>)
  
  return (
    <div>Homepage</div>
  )
}

export default Homepage