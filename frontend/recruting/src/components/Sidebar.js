import React from "react";
import "../styles/Dashboard.css";
import logo from "../assets/logo.png";

const Sidebar = ({ isOpen, onSelect, user }) => {
  const isAdmin = user?.email === "manoj@zavenit.com"; // Check if the user is admin

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      {/* Company Logo */}
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="company-logo" />
      </div>
      <ul>
        <li className="nav-item" onClick={() => onSelect("showCandidates")}>
          👤 Show Candidates
        </li>
        <li className="nav-item" onClick={() => onSelect("submissions")}>
          📋 Submissions
        </li>
        <li className="nav-item" onClick={() => onSelect("interviews")}>
          🗓️ Interviews
        </li>
        {isAdmin && (
          <li className="nav-item" onClick={() => onSelect("addRemoveCandidates")}>
            ➕ Add/Remove Candidates
          </li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
