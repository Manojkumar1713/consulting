import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("google-user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const renderContent = () => {
    switch (selectedOption) {
      case "showCandidates":
        return <div>List of all candidates will appear here.</div>;
      case "submissions":
        return (
          <div>
            <h2>Submission Form</h2>
            <form className="submission-form">
              <label>
                Candidate Name:
                <input type="text" placeholder="Enter candidate name" />
              </label>
              <label>
                Submission Details:
                <textarea placeholder="Enter submission details"></textarea>
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      case "interviews":
        return <div>Schedule and manage interviews here.</div>;
      case "addRemoveCandidates":
        return <div>Admin Panel: Add or remove candidates here.</div>;
      default:
        return <div>Welcome to the dashboard.</div>;
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar isOpen={true} onSelect={setSelectedOption} user={user} />
      <div className="main-content">
        <Navbar />
        <div className="content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
