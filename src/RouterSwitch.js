import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./views/Homepage";

function RouterSwitch() {
  const [loggedInUser, setloggedInUser] = useState(false)
  const port = process.env.REACT_APP_PORT || "http://localhost:5000"
  
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
