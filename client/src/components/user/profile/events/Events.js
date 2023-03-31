import React from "react";
import Auth from "../../../../utils/auth";
import { Link } from "react-router-dom";
import { useQuery, useState } from "@apollo/client";
import Login from "../../../home/Login/login";
// import SignUp from '../../components/home/signUp/SignUp'
import { QUERY_USER } from "../../../../utils/queries";
import { useMainContext } from "../../../../utils/GlobalState";
import Header from "../../Header";
import EventBody from "./EventBody";

const Events = () => {
  const { loading, meErr, data } = useQuery(QUERY_USER);
  let user;
  if (loading) {
    return <h1>Loading Events...</h1>;
  }
  if (meErr) {
    return <h1>Error!</h1>;
  }
  if (data) {
    user = data.user;
    console.log("got data in events");
  }
  return (
    <div className="container">
      <h2>
        This is the Events Page(User)
        <p />
        You are {user.firstName}. It hosts the Event-Body component:
      </h2>
      <Header user={user} />
      <EventBody user={user} />
    </div>
  );
};

export default Events;
