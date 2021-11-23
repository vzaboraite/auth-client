import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup({ setAuthenticatedUser }) {
  const navigate = useNavigate();
  console.log("Inside Signup page");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setUser({ ...user, [inputName]: inputValue });
  };
  console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();

    const fetchOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...user }),
    };

    fetch("http://localhost:3030/signup", fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log("Inside signup fetch: ", data);
        setAuthenticatedUser(data);

        navigate("/secure");
      });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
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
