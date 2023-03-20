import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import "./Userpage.css"


function Userpage({port,allUsers, loggedInUser}) {
  const {user} = useParams()
  const navigate = useNavigate()

  if (!loggedInUser) return navigate("../ShareSpace")

  const foundUser = allUsers?.find(person => person._id === user) || null

  const createUserPage = () => {
    return (
      <div className="user-page-main-container">
        <Navbar port={port} loggedInUser={loggedInUser} />
        <div className="userPage-container">
          <div className="userpage-user">
            <img
              className="userpage-user-img"
              src={foundUser.profilepicture}
              alt={foundUser.username}
            />
            <div className="userpage-user-text-content">
              <h1 className="userpage-user-fullname">{foundUser.fullname}</h1>
              <p className="userpage-user-username">@{foundUser.username}</p>
            </div>
          </div>
          <div className="userpage-bottom">
            <div className="userpage-bottom-left">
              <div className="about-me-userpage">
                <div className="aboutme-edit-container">
                  <div className="aboutme-edit-container-top">
                    <p className="about-me-text">About me</p>
                    <i className="fa-solid fa-pencil"></i>
                  </div>
                  <div className="about-me-text">User since 2023</div>
                </div>
                <div className="userpage-friends-container">
                  <div className="friends-text-friends-container">
                    <div className="userpage-friends-text-container">
                      <p className="userpage-friends-text">Friends</p>
                    </div>
                    <div className="user-all-friends-container">
                      <div className="friend-container">
                        <img
                          src={foundUser.profilepicture}
                          alt={foundUser.username}
                        />
                        <p>Example user</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="userpage-bottom-right">
              <form className='user-form' action="">
              <textarea
                className="user-text-area"
                name="user-text-area"
                id="user-text-area"
                cols="30"
                rows="10"
                placeholder="What's on your mind?"
              >
              </textarea>
              <button className='submit-button'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    {!foundUser && <h1>User does not exist</h1>}
    {foundUser && createUserPage()}
    </>
  )
}

export default Userpage