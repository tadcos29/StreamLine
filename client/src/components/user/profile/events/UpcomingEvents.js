import React, { useState } from "react";
import Auth from "../../../../utils/auth";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { SET_UE_EVENT } from "../../../../utils/actions";
import Login from "../../../home/Login/login";
// import SignUp from '../../components/home/signUp/SignUp'
import { QUERY_EVENTS, QUERY_USER } from "../../../../utils/queries";
import { useMainContext } from "../../../../utils/GlobalState";
import Header from "../../Header";
import Body from "./EventBody";
import EventCardHome from "./partials/EventCardHome";
import CreateEventForm from "../../../host/events/createEvent/CreateForm";
import "../../user.css";
const UpcomingEvents = () => {
  const [state, dispatch] = useMainContext();
  const { UESelectedEvent } = state;
  const { loading, meErr, data } = useQuery(QUERY_USER);
  const handleEventClick = (eventData) => {
    console.log("onthe");
    if (eventData) {
      dispatch({
        type: SET_UE_EVENT,
        payload: eventData,
      });
    }
    // console.log(`clicked ont ${event.creator.firstName}`);
  };
  const {
    loading: evLoading,
    error: evError,
    data: evData,
  } = useQuery(QUERY_EVENTS);
  let user;
  let eventList;
  let myEventList;
  if (loading || evLoading) {
    return <h1>Loading Events...</h1>;
  }
  if (meErr || evError) {
    return <h1>Error!</h1>;
  }
  if (data) {
    user = data.user;
    console.log("got data in events");
  }
  if (evData) {
    eventList = evData.events;
    console.log("got an event list");
    console.log(eventList);
    // myEventList=eventList.filter(event => event.creator._id === user._id);
  }
  return (
    <div className="upcoming-events">
      <h2 className="upcoming-events-title">What's On</h2>
      <h2 className="dash-bio">View all future events hosted on StreamLine</h2>
      <div className="event-ticket">
        <ul>
          {eventList.map((myEvent) => (
            <EventCardHome
              key={myEvent._id}
              eventData={myEvent}
              handleClick={handleEventClick}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpcomingEvents;
