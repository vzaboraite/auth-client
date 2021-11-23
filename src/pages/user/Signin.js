import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin({ setAuthenticatedUser }) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    console.log("Inside SignIn form: ", inputName, inputValue);

    setUser({
      ...user,
      [inputName]: inputValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const fetchOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...user }),
    };

    fetch("http://localhost:3030/signin", fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log("Inside signin fetch: ", data);
        setAuthenticatedUser(data);

        navigate("/secure");
      });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
