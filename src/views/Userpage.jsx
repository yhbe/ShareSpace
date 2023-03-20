import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import "./Userpage.css"


function Userpage({port,allUsers, loggedInUser, refreshPage}) {
  const {user} = useParams()
  const navigate = useNavigate()

  if (!loggedInUser) return navigate("../ShareSpace")

  const foundUser = allUsers?.find(person => person._id === user) || null

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    axios
      .post(`${port}/users/userPost`, {
        content: formData.get("user-text-area"),
        author: loggedInUser.id,
      })
      .then((response) => {
        refreshPage()
      })
      .catch((error) => {
        console.log(error);
      });

  };

  const createUserPage = () => {
    const createPostJSX = (post) => {
      return (
        <div className="user-post-container">
          <div className="post-container-top">
            <div className="post-container-top-user-info">
              <img src={foundUser.profilepicture} alt={foundUser.username} />
              <p className="post-username">{foundUser.username}</p>
            </div>
            <i class="fa-solid fa-trash-can"></i>
          </div>
          <div className="post-container-bottom">
            <p className="post-content">{post.content}</p>
            <hr />
            <div className="post-container-bottom-likes-comments-div">
              <p className="amount-of-likes">0 Likes</p>
              <p className="amount-of-comments">0 Comments</p>
            </div>
            <div className="post-like-or-comment">
              <button className="post-button">Like</button>
              <button className="post-button darkergray">Comment</button>
            </div>
          </div>
        </div>
      );
    }
    
    const posts = loggedInUser.posts.map(post => createPostJSX(post))

    
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
              <form onSubmit={(e) => handleFormSubmit(e)} className='user-form' action="">
              <textarea
                className="user-text-area"
                name="user-text-area"
                id="user-text-area"
                cols="30"
                rows="10"
                placeholder="What's on your mind?"
              >
              </textarea>
              <button type='submit' className='submit-button'>Submit</button>
              </form>
              <div className="users-posts">
                {posts}
              </div>
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