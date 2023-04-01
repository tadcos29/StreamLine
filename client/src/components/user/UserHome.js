import React from "react";
// import Auth from "../../utils/auth";
import { useQuery, useState } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
// import { useMainContext } from '../../utils/GlobalState'
// This body is the tickets body
import Body from "./Body";
import Header from "./Header";
import TopNav from "./TopBar";
import image from "../../assets/images/background8.png";
import "./user.css";

const UserHome = () => {
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
    <div
      className="background"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      <div className="home-contain h-screen mx-auto ml-3 bg-main-bg md:flex flex-row text-main-text font-main">
        <div>
          <Header user={user} />
        </div>
        <div className="w-full mx-3">
          <div>
            <TopNav user={user} />
          </div>
          <div className="body-container">
            <Body user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
