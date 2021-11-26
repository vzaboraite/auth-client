import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";
import Secure from "./Secure";
import Signin from "./Signin";
import Signup from "./Signup";

export default function Router() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  useEffect(() => {
    if (authenticatedUser) return;

    const token = localStorage.getItem("token");

    if (token) {
      setAuthenticatedUser(token);
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
          <Route path="secure" element={authenticatedUser && <Secure />} />
        </Route>
      </Routes>
    </>
  );
}
