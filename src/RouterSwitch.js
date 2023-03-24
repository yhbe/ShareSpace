import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./views/Homepage";
import Userpage from "./views/Userpage";

function RouterSwitch() {
  const [loggedInUser, setloggedInUser] = useState(false)
  const [allUsers, setAllUsers] = useState(undefined)
  const port = process.env.REACT_APP_PORT || "http://localhost:5000"

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${port}/users/loginWithCookies`, {
          withCredentials: true,
        });
        if (response.status === 200) {
          const { user } = response.data;
          setloggedInUser(user);
        }
      } catch (error) {
        if (error.response.status === 401){
          return
        } else console.error(error);
        
      }
    };
    fetchUser();

    const fetchAllUsers = async () => {
      try {
        const response = await axios.get(`${port}/users`);
        setAllUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAllUsers()
  }, []);
  
  const refreshPage = () => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get(`${port}/users`);
        setAllUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllUsers();

    const fetchUser = async () => {
      try {
        const response = await axios.get(`${port}/users/loginWithCookies`, {
          withCredentials: true,
        });
        if (response.status === 200) {
          const { user } = response.data;
          setloggedInUser(user);
        }
      } catch (error) {
        if (error.response.status === 401) {
          return;
        } else console.error(error);
      }
    };
    fetchUser();
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/ShareSpace" />} />
        <Route
          path="/ShareSpace"
          element={
            <Homepage
              loggedInUser={loggedInUser}
              setloggedInUser={setloggedInUser}
              port={port}
              allUsers={allUsers}
              refreshPage={refreshPage}
            />
          }
        />
        <Route
          path="/ShareSpace/sign-up"
          element={<Homepage loggedInUser={loggedInUser} />}
        />
        <Route
          path="/ShareSpace/:user"
          element={
            <Userpage
              port={port}
              allUsers={allUsers}
              loggedInUser={loggedInUser}
              refreshPage={refreshPage}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterSwitch;
