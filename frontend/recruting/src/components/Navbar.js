import React, { useState } from "react";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("google-user"));
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem("google-user");
    navigate("/");
  };

  return (
    <div className="navbar">
      <span className="welcome-text">Welcome, {user?.name}</span>
      <div className="profile-container">
        <img
          src={user?.picture}
          alt="Profile"
          className="profile-image"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />
        {dropdownOpen && (
          <div className="dropdown-menu">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
