import axios from 'axios';
import React from 'react';
import Navbar from '../components/Navbar';
import UsersAside from '../components/UsersAside';
import "./Homepage.css";
import Login from './Login';

function Homepage({loggedInUser,setloggedInUser, port, allUsers, refreshPage}) {
  if (!loggedInUser) return <Login port={port} setloggedInUser={setloggedInUser} refreshPage={refreshPage}/>;
  
  const showFriendRequests = (friend) => {
    const addFriend = async (loggedInUserId, userId) => {
      try {
        const response = await axios.post(`${port}/users/acceptFriendRequest`, {
          userId,
          loggedInUserId,
        });
        if (response.status === 200){
          refreshPage()
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    if (friend.receiver === "false" && friend.status === "pending"){
      const user = allUsers.find(user => user._id === friend.userId)

      return (
      <div className='displayon' onClick={() => {
        document.querySelector(".displayon").classList.add("hidden")
      }}>
        <p>{user.username} sent you a friend request</p>
        <button onClick={() => addFriend(loggedInUser.id, user._id)}>Add</button>
      </div>
      )
    }
  }
  
  const friendRequests = loggedInUser.friends.map(friend => showFriendRequests(friend))

  
  const createPostJSX = (post) => {
    return (
      <div onClick={() => window.location = `../ShareSpace/${loggedInUser.id}`} className="user-post-container">
        <div className="post-container-top pointer">
        <p>{loggedInUser.username}</p>
        <h1>{post.content}</h1>
        </div>
      </div>
    );
  }

  const createFollowerPost = (user) => {
    if (!user || !user._id || user._id === loggedInUser.id) {
      return null;
    }

    const potentialFriend = user.friends.find(
      (friend) => friend.userId === loggedInUser.id
    );

    if (!potentialFriend || potentialFriend.status !== "accepted") {
      return null;
    }


    const postsJSX = user.posts.map((post) => {
      return (
        <div
          key={post._id}
          onClick={() => (window.location = `../ShareSpace/${user._id}`)}
          className="user-post-container pointer"
        >
          <div className="post-container-top">
            <p>{user.username}</p>
            <h1>{post.content}</h1>
          </div>
        </div>
      );
    });

    return <>{postsJSX}</>;
  };
  
  const followerPosts = allUsers?.map(user => createFollowerPost(user))
  
  const posts = loggedInUser.posts.map(post => createPostJSX(post))

  return (
    <div className="homepage-container">
      <Navbar loggedInUser={loggedInUser} port={port} />
      <main className="align-nav-homepage-container homepage-aside-and-content">
        <div className="main-inner-container">
          {followerPosts && followerPosts}
          {posts && posts}
          {friendRequests}
        </div>
        <UsersAside
          port={port}
          allUsers={allUsers}
          loggedInUser={loggedInUser}
          refreshPage={refreshPage}
        />
      </main>
      <div className="credit--">
        <a
          href="https://www.flaticon.com/free-icons/facebook"
          title="facebook icons"
        >
          Favicon created by Freepik - Flaticon
        </a>
      </div>
    </div>
  );
}

export default Homepage