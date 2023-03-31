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
  const fakeTickets = [
    {
      id: 1,
      name: "John's Grand Event",
      description: "All things John, all the time.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 2,
      name: "Jane's Grand Event",
      description: "A classic Jane event. Less sollipsistic than John's.",
      url: "https://www.youtube.com/watch?v=5JuVHCJVYf4",
    },
    {
      id: 2,
      name: "Bob's Grand Event",
      description: "Meh. It's Bob.",
      url: "https://www.youtube.com/watch?v=k85mRPqvMbE",
    },
  ];

  return (
    <div className="container">
      <h2>This is the Tickets Body component, hosted by Tickets.js</h2>
      {user.tickets ? (
        <>
          <h1>There might be tickets</h1>
          {/* <Ticket/> */}
        </>
      ) : (
        <>
          <h1>You have no tickets</h1>
          <h1>However, for styling purposes, here are some fake tickets.</h1>
          <ul>
            {fakeTickets.map((ticket) => (
              <Ticket key={ticket.id} ticket={ticket} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TicketBody;
