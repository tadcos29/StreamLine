import React, { useContext, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery, useLazyQuery, useState, useMutation } from "@apollo/client";
import { useMainContext } from '../../../../../utils/GlobalState';
import { ADD_TICKET } from '../../../../../utils/mutations';
import { QUERY_USER } from '../../../../../utils/queries';
import { QUERY_CHECKOUT } from '../../../../../utils/queries'
import ToggleTest from './ToggleTest';

const stripePromise = loadStripe('pk_test_51MsMqBHgq2gnLMifvc15OqYndHy9thmRA7B3uQYlTzZK9Ex8qRXU7Wn8XujstxUaTMLZ4qCNB0VDs95VTZN4cADP003D7EOE5x');

const EventInfoBlock = () => {
  const [queryCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const [addTicket, { error, data: addTData }] = useMutation(ADD_TICKET, {
    refetchQueries: [{ query: QUERY_USER }]
  });
  const [state, dispatch] = useMainContext();
  const { UESelectedEvent } = state;
  const handleBuyClick = async () => {
    try {
      console.log(eventData);
      const { data } = await queryCheckout({
        variables: {
          event: eventData._id,
        },
      });

      if (data) {
        const stripe = await stripePromise;
        stripe.redirectToCheckout({ sessionId: data.checkout.session })
          .then(function (result) {
            if (result.error) {
              console.log(result.error.message);
            }
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!UESelectedEvent) {
    console.log('no state');
    return null;
  }

  const eventData = UESelectedEvent;

  return (
    <div>
      <h2>Selected Event:</h2>
      <p>Name: {eventData.name}</p>
      <p>Description: {eventData.description}</p>
      <p>Creator: {eventData.creator.firstName} {eventData.creator.lastName}</p>
      <p>Access Key: {eventData.accessKey || 'Public'}</p>
      <p>URL: {eventData.url}</p>
      <p>isActive: {eventData.isLive}</p>
      <p>Admission Price: {eventData.admissionPrice}</p>
      <button onClick={handleBuyClick}>Buy Ticket</button>

    </div>
  );
};

export default EventInfoBlock;