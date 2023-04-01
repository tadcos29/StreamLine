import React, { useEffect } from "react";


import EventBody from '../user/profile/events/EventBody'
import CreateEventForm from "../host/events/createEvent/CreateForm";
import UpcomingEvents from "./profile/events/UpcomingEvents";
import EventInfoBlock from "./profile/events/partials/EventInfoBlock";

const Body = ({ user }) => {
  return (
    <div className="container">      <div style={{ display: 'flex', flexDirection: 'row', height: '50vh' }}>
        <div style={{ width: '50%', height: '100%', backgroundColor: '#FF6961' }}>
          <h1>Free Square</h1>
        </div>
        <div style={{ width: '50%', height: '100%', backgroundColor: '#ADD8E6', overflow: 'scroll' }}>
          <UpcomingEvents />

        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", height: "50vh" }}>
        <div
          style={{ width: "50%", height: "100%", backgroundColor: "#77DD77" }}
        >
          <h1>Green Square</h1>

          <EventInfoBlock />
        </div>
        <div style={{ width: '50%', height: '100%', backgroundColor: '#FFFACD', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1>More Info</h1>
        </div>
        <div
          style={{ width: "50%", height: "100%", backgroundColor: "#FFFACD" }}
        ></div>
      </div>
    </div>
  );
};

export default Body;