import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";
import Secure from "./Secure";
import Signin from "./Signin";
import Signup from "./Signup";

export default function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="secure" element={<Secure />} />
        </Route>
      </Routes>
    </>
  );
}
