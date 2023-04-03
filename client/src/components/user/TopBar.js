import React from "react";
import { Link } from "react-router-dom";
import { useQuery, useState } from "@apollo/client";
import Auth from "../../utils/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { QUERY_USER } from "../../utils/queries";
import "./user.css";
import ShowAvatar from "./profile/partials/ShowAvatar";

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
        <header className="topbar flex md:flex-row justify-between ">
          <div className="my-auto">
            <button class="bg-lime-400 hover:bg-lime-300 text-black font-bold ml-5 my-auto py-2 px-4 rounded-md">
              <Link to="/CreateEvent">Create Event</Link>
            </button>
          </div>
          <div className="livenowlink align-middle my-auto">
            <FontAwesomeIcon className="stream-icon" icon={faCircleDot} />
            <Link to="/Livestream">Live Now</Link>
          </div>
          <h2 className="greeting align-middle mr-5 my-auto">
            {user.firstName} {user.lastName}
            <ShowAvatar
              user={user}
              style={{ maxWidth: "100%", objectFit: "contain" }}
            />
          </h2>
        </header>
      </div>
    </div>
  );
};

export default TopBar;
