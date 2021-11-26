import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup({ setAuthenticatedUser }) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setUser({ ...user, [inputName]: inputValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const fetchOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...user }),
    };

    fetch("http://localhost:3030/signup", fetchOptions)
      .then((res) => {
        if (res.status === 400) {
          throw Error("Missing information");
        } else if (res.status !== 200) {
          throw Error(res);
        }

        return res.json();
      })
      .then((data) => {
        const token = data;

        if (token) {
          setAuthenticatedUser(token);

          localStorage.setItem("token", token);

          navigate("/secure");
        }
      })
      .catch((error) => {
        return error;
      });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
