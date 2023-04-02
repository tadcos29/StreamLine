import React from "react";
import Auth from "../../../utils/auth";
import { Link } from "react-router-dom";
import { useQuery, useState } from "@apollo/client";
import Login from "../../home/Login/login";
// import SignUp from '../../components/home/signUp/SignUp'
import { QUERY_USER } from "../../../utils/queries";
import { useMainContext } from "../../../utils/GlobalState";

import Ticket from "./partials/Ticket";

const TicketBody = ({ user }) => {
  

  return (
    <div>
      <h2>This is the Tickets Body component, hosted by Tickets.js</h2>
      {user.tickets ? (
        <>
          <h1>There might be tickets</h1>
          {(user.tickets.length) ? (
            <ul>
            {user.tickets.map((ticket) => (
              <Ticket key={ticket._id} ticket={ticket} />
            ))}
          </ul>
            ): ('no tickets')}
        </>
      ) : (
        <>
          <h1>You have no tickets</h1>
        </>
      )}
    </div>
  );
};

export default TicketBody;
