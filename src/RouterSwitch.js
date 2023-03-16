import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./views/Homepage";

function RouterSwitch() {
  const [loggedIn, setLoggedIn] = useState(false)
  const port = process.env.REACT_APP_PORT || "http://localhost:5000"
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ShareSpace" element={<Homepage loggedIn={loggedIn} port={port}/>} />
        <Route path="/ShareSpace/sign-up" element={<Homepage loggedIn={loggedIn} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterSwitch;
