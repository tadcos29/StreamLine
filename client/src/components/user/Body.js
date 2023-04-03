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
        Buy tickets to upcoming events. Enter access codes for private events.
      </div>
      <div>
        <h2 className="upcoming-events-title">What's On</h2>
        <h2 className="dash-bio">
          View all future events hosted on StreamLine
        </h2>
        <div style={{ display: "flex", flexDirection: "row", height: "50vh" }}>
          <div className="grid grid-cols-5">
            <div className="dash-section mr-0 md:mr-3 col-span-5 md:col-span-3">
              <UpcomingEvents />
            </div>

            <div className="dash-section ml-0 md:ml-3 col-span-5 md:col-span-2 sticky top-0">
              <EventInfoBlock />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
