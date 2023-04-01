import React, { useContext } from 'react';
import { useQuery, useState } from "@apollo/client";
import { useMainContext } from '../../../../../utils/GlobalState';

const EventInfoBlock = () => {
  const [state, dispatch] = useMainContext();
  const {UESelectedEvent} = state
  const handleBuyClick = () => {
     // write ticket query
    console.log('Buy button clicked');
  };

  if (!UESelectedEvent) {
    return null;
  }
  
  const eventData = UESelectedEvent;
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
      <button onClick={handleBuyClick}>Buy Ticket</button>
    </div>
  );
};

export default EventInfoBlock;