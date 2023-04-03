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
    <div className="event-container">
      <h2 className="dash-greeting">Your Tickets</h2>
      <p className="dash-bio">
        {" "}
        View all your tickets for upcoming events you've RSVP'd to
      </p>
      {user.tickets ? (
        <>
          <h1>There might be tickets</h1>
          {user.tickets.length ? (
            <ul>
              {user.tickets.map((ticket) => (
                <Ticket key={ticket._id} ticket={ticket} />
              ))}
            </ul>
          ) : (
            "no tickets"
          )}
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
