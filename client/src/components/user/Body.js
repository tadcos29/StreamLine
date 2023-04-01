import React, { useEffect } from "react";
import { QUERY_USER } from "../../utils/queries";
import EventBody from "../user/profile/events/EventBody";
import CreateEventForm from "../host/events/createEvent/CreateForm";
import UpcomingEvents from "./profile/events/UpcomingEvents";
import EventInfoBlock from "./profile/events/partials/EventInfoBlock";
import "./user.css";

const Body = ({ user }) => {
  return (
    <div className="dashboard">
      <div className="dash-greeting">Hi, {user.firstName}</div>
      <div className="dash-bio">
        Checkout upcoming events and keep track of events you've RSVP'd to
      </div>
      <div style={{ display: "flex", flexDirection: "row", height: "50vh" }}>
        <div className="dash-section mr-3 w-2/5">
          <UpcomingEvents />
        </div>

        <div className="dash-section ml-3 w-2/5">
          <EventInfoBlock />
        </div>
      </div>
    </div>
  );
};

export default Body;
