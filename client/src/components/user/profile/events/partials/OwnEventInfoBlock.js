import React, { useContext } from "react";
import { useQuery, useState, useMutation } from "@apollo/client";
import { useMainContext } from "../../../../../utils/GlobalState";
import { ADD_TICKET } from "../../../../../utils/mutations";
import { QUERY_USER } from "../../../../../utils/queries";
import { EDIT_MODE } from "../../../../../utils/actions";

const OwnEventInfoBlock = () => {
  // const [addTicket, { error, data }] = useMutation(ADD_TICKET, {
  //     refetchQueries: [{ query: QUERY_USER }]});
  const [state, dispatch] = useMainContext();
  const { OESelectedEvent } = state;
  const handleEditClick = async () => {
    // launch editor
    try {
      dispatch({
        type: EDIT_MODE,
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (!OESelectedEvent) {
    return null;
  }

  const eventData = OESelectedEvent;

  return (
    <div>
      <div className="bg-lime-300 rounded-md px-10 pb-5 text-lg">
        <h2 className="upcoming-events-title text-center">Event Details</h2>
        <p className="detail-label">Name:</p> {eventData.name}
        <p className="detail-label">Description:</p> {eventData.description}
        <p className="detail-label">Creator: </p> {eventData.creator.firstName}{" "}
        {eventData.creator.lastName}
        <p className="detail-label">Access Key:</p>{" "}
        {eventData.accessKey || "Public"}
        <p className="detail-label">URL:</p> {eventData.url}
        <p className="detail-label">isActive:</p> {eventData.isLive}
        <p className="detail-label">Admission Price: </p>${" "}
        {eventData.admissionPrice}
        <p className="detail-label text-center ">Want to Attend?</p>
        <button
          className="text-lg flex  mx-auto bg-black hover:bg-slate-800 hover:scale-110 text-lime-400 font-bold py-2 px-4 rounded-md"
          onClick={handleEditClick}
        >
          Edit Event
        </button>
      </div>
    </div>
  );
};

export default OwnEventInfoBlock;
