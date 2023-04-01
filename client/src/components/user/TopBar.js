import React from "react";
import { Link } from "react-router-dom";
import { useQuery, useState } from "@apollo/client";
import Auth from "../../utils/auth";
import { QUERY_USER } from "../../utils/queries";
import "./user.css";
const TopBar = () => {
  const { loading, meErr, data } = useQuery(QUERY_USER);
  let user;
  if (loading) {
    return <h1>Loading UserHome...</h1>;
  }
  if (data) {
    user = data.user;
    console.log("got data in userhome");
  }

  return (
    <div>
      <div>
        <header className="topbar  flex md:flex-row justify-between ">
          <h2 className="greeting align-middle my-auto">
            Hello, {user.firstName}.
          </h2>
          <div className="livenowlink align-middle my-auto">
            <Link to="/Livestream">Live Now</Link>
          </div>
          <div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              <Link to="/CreateEvent">Create Event</Link>
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default TopBar;
