import React, { useContext, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery, useLazyQuery, useState, useMutation } from "@apollo/client";
import { useMainContext } from "../../../../../utils/GlobalState";
import { ADD_TICKET, SET_PURCHASE } from "../../../../../utils/mutations";
import { QUERY_USER } from "../../../../../utils/queries";
import { QUERY_CHECKOUT } from "../../../../../utils/queries";
import ToggleTest from "./ToggleTest";
import { SET_CURRENT_PURCHASE } from "../../../../../utils/actions";

const stripePromise = loadStripe(
  "pk_test_51MsMqBHgq2gnLMifvc15OqYndHy9thmRA7B3uQYlTzZK9Ex8qRXU7Wn8XujstxUaTMLZ4qCNB0VDs95VTZN4cADP003D7EOE5x"
);

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
  const [setPurchase] = useMutation(SET_PURCHASE);
  const [addTicket, { error, data: addTdata }] = useMutation(ADD_TICKET, {
    refetchQueries: [{ query: QUERY_USER }],
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
        const { userData } = await setPurchase({
          variables: {
            event: eventData._id,
          },
        });

        const { data } = await queryCheckout({
          variables: {
            event: eventData._id,
          },
        });

        if (data) {
          const stripe = await stripePromise;
          // what if we set the session id here, and watched for it?
          // add a session to the array of sessions...

          stripe
            .redirectToCheckout({ sessionId: data.checkout.session })
            .then(function (result) {
              if (result.error) {
                console.log(result.error.message);
              }
            });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  if (!UESelectedEvent) {
    console.log("no state");
    return null;
  }

  const eventData = UESelectedEvent;

  return (
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
        onClick={handleBuyClick}
      >
        Buy Ticket
      </button>
    </div>
  );
};

export default EventInfoBlock;
