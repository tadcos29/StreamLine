import React, { useContext } from 'react';
import { useQuery, useState, useMutation } from "@apollo/client";
import { useMainContext } from '../../../../../utils/GlobalState';
import { ADD_TICKET } from '../../../../../utils/mutations';
import { QUERY_USER } from '../../../../../utils/queries';
import { EDIT_MODE } from '../../../../../utils/actions';

const OwnEventInfoBlock = () => {
    // const [addTicket, { error, data }] = useMutation(ADD_TICKET, {
    //     refetchQueries: [{ query: QUERY_USER }]});
  const [state, dispatch] = useMainContext();
  const {OESelectedEvent } = state
  const handleEditClick = async () => {
     // write ticket query
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
  console.log(eventData);

  return (
    <div>
      <h2>Selected Event:</h2>
      <p>Name: {eventData.name}</p>
      <p>Description: {eventData.description}</p>
      <p>Creator: {eventData.creator.firstName} {eventData.creator.lastName}</p>
      <p>Access Key: {eventData.accessKey || 'Public'}</p>
      <p>URL: {eventData.url}</p>
      <p>Admission Price: {eventData.admissionPrice}</p>
      <button style={{backgroundColor: '#4C6650'}} onClick={handleEditClick}>Edit Event</button>
    </div>
  );
};

export default OwnEventInfoBlock;