import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";
import Secure from "./Secure";
import Signin from "./Signin";
import Signup from "./Signup";

export default function Router() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  console.log("Inside user Router.js: ", authenticatedUser);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route
            path="signup"
            element={<Signup setAuthenticatedUser={setAuthenticatedUser} />}
          />
          <Route path="signin" element={<Signin />} />
          <Route path="secure" element={<Secure />} />
        </Route>
      </Routes>
    </>
  );
}
