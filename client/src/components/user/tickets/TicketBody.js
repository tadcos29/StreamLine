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
        View all your tickets for upcoming events you've RSVP'd to.
      </p>
      <h2 className="upcoming-events-title">Coming Up</h2>
      <h2 className="dash-bio">
        These are all the events you have tickets for
      </h2>
      <div className=" w-full md:w-3/5">
        {user.tickets ? (
          <>
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
    </div>
  );
};

export default TicketBody;
