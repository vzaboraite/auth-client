import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";
import Secure from "./Secure";
import Signin from "./Signin";
import Signup from "./Signup";

export default function Router() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  console.log("Inside user Router.js: ", authenticatedUser);

  useEffect(() => {
    if (authenticatedUser) return;

    const stringifiedUser = localStorage.getItem("user");

    if (stringifiedUser) {
      const user = JSON.parse(stringifiedUser);

      setAuthenticatedUser(user);
    }
  }, [authenticatedUser]);

  return (
    <>
      <Header setAuthenticatedUser={setAuthenticatedUser} />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route
            path="signup"
            element={<Signup setAuthenticatedUser={setAuthenticatedUser} />}
          />
          <Route
            path="signin"
            element={<Signin setAuthenticatedUser={setAuthenticatedUser} />}
          />
          <Route
            path="secure"
            element={authenticatedUser && <Secure user={authenticatedUser} />}
          />
        </Route>
      </Routes>
    </>
  );
}
