import React from "react";
import Update from "./update/Update";

const Body = ({ user }) => {
  return (
    <div className="dashboard">
      <div className="dash-greeting"> Profile </div>
      <h1 className="dash-bio">Update and view account info</h1>
      <Update user={user} />
    </div>
  );
};

export default Body;
