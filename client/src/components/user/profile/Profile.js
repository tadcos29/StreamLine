import React from "react";
import Auth from "../../../utils/auth";
import { Link } from "react-router-dom";
import { useQuery, useState } from "@apollo/client";
import Login from "../../home/Login/Login";
// import SignUp from '../../components/home/signUp/SignUp'
import { QUERY_USER } from "../../../utils/queries";
import { useMainContext } from "../../../utils/GlobalState";
import Header from "../Header";
import Body from "./Body";

const Profile = () => {
  const { loading, meErr, data } = useQuery(QUERY_USER);
  let user;
  if (loading) {
    return <h1>Loading Tickets...</h1>;
  }
  if (meErr) {
    return <h1>Error!</h1>;
  }
  if (data) {
    user = data.user;
    console.log("got data in tickets");
  }

  return (
    <div className="container">
      <h2>
        This is the User Profile Page which has been called by the Body(User)
        <p />
        You are {user.firstName}. It hosts the Profile-Body component:
      </h2>
      <Header user={user} />
      <Body user={user} />
    </div>
  );
};

export default Profile;
