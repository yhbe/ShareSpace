import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./views/Homepage";

function RouterSwitch() {
  const [loggedInUser, setloggedInUser] = useState(false)
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
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/ShareSpace"
          element={<Homepage loggedInUser={loggedInUser} setloggedInUser={setloggedInUser} port={port} />}
        />
        <Route
          path="/ShareSpace/sign-up"
          element={<Homepage loggedInUser={loggedInUser} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterSwitch;
