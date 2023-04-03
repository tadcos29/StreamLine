import React, { useContext, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery, useLazyQuery, useState, useMutation } from "@apollo/client";
import { useMainContext } from '../../../../../utils/GlobalState';
import { ADD_TICKET, SET_PURCHASE } from '../../../../../utils/mutations';
import { QUERY_USER } from '../../../../../utils/queries';
import { QUERY_CHECKOUT } from '../../../../../utils/queries'
import ToggleTest from './ToggleTest';
import { SET_CURRENT_PURCHASE } from '../../../../../utils/actions';



const stripePromise = loadStripe('pk_test_51MsMqBHgq2gnLMifvc15OqYndHy9thmRA7B3uQYlTzZK9Ex8qRXU7Wn8XujstxUaTMLZ4qCNB0VDs95VTZN4cADP003D7EOE5x');



// try {
  //  const { addTdata } = await addTicket({ 
  //     variables: {
  //       event: eventData._id,
  //     },
  //   });
  // } catch (error) {
  //     console.log(error);
  //   }



const EventInfoBlock = () => {
  const [queryCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const [setPurchase] = useMutation(SET_PURCHASE)
  const [addTicket, { error, data:addTdata }] = useMutation(ADD_TICKET, {
    refetchQueries: [{ query: QUERY_USER }]
  });
  const [state, dispatch] = useMainContext();
  const { UESelectedEvent, currentPurchase } = state;
  const handleBuyClick = async () => {

  if (eventData.admissionPrice < 20) {
  try {
   const { addTdata } = await addTicket({ 
      variables: {
        event: eventData._id,
      },
    });
  } catch (error) {
      console.log(error);
    }

} else {
    try {

    const newUser = await setPurchase({
      variables: {
        event: eventData._id,
      },
    })
    
      const { data } = await queryCheckout({
        variables: {
          event:eventData._id
        },
      });

      if (data) {
        
        const stripe = await stripePromise;
        // what if we set the session id here, and watched for it?
        // add a session to the array of sessions...
       
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
}
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