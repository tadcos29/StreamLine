import React, { useEffect } from "react";

// import TicketForm from './tickets/TicketForm'
// import Tickets from './tickets/Tickets'
import EventBody from "../user/profile/events/EventBody";

import CreateEventForm from "../host/events/createEvent/CreateForm";

const Body = ({ user }) => {
  return (
    <div className="container">
      <div style={{ display: "flex", flexDirection: "row", height: "50vh" }}>
        <div
          style={{ width: "50%", height: "100%", backgroundColor: "#FF6961" }}
        >
          <h1>
            These four coloured squares comprise the User Body Component, not to
            be confused with the tickets one.
          </h1>
        </div>
        <div
          style={{ width: "50%", height: "100%", backgroundColor: "#ADD8E6" }}
        >
          event body used to be here
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", height: "50vh" }}>
        <div
          style={{ width: "50%", height: "100%", backgroundColor: "#77DD77" }}
        >
          <h1>Green Square</h1>
        </div>
        <div
          style={{ width: "50%", height: "100%", backgroundColor: "#FFFACD" }}
        ></div>
      </div>
    </div>
  );
};

export default Body;
