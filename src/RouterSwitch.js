import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./views/Homepage";

function RouterSwitch() {
  const [loggedIn, setLoggedIn] = useState(false)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ShareSpace" element={<Homepage loggedIn={loggedIn} />} />
        <Route path="/ShareSpace/sign-up" element={<Homepage loggedIn={loggedIn} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterSwitch;
