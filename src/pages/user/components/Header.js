import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Header({ setAuthenticatedUser }) {
  const navigate = useNavigate();

  const handleLogOut = (event) => {
    localStorage.removeItem("token");

    setAuthenticatedUser(null);

    navigate("/");
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/secure">Secure</Link>
          </li>
          <li>
            <button type="button" onClick={handleLogOut}>
              Log Out
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
