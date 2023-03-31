import React from "react";
import Auth from "../../../utils/auth";
import { Link } from "react-router-dom";
import { useQuery, useState } from "@apollo/client";
import Login from "../../home/melissa/Login";
// import SignUp from '../../components/home/signUp/SignUp'
import { QUERY_USER } from "../../../utils/queries";
import { useMainContext } from "../../../utils/GlobalState";
import Header from "../Header";

import TicketBody from "./TicketBody";

const Tickets = () => {
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
      <Header user={user} />
      <h2>
        This is the Tickets Page which has been called by the Body(User)
        <p />
        You are {user.firstName}. It hosts the Ticket Body component:
      </h2>
      <TicketBody user={user} />
    </div>
  );
};

export default Tickets;
