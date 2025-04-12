import React from "react";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    navigate("/"); // Redirect to home page
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutButton;
