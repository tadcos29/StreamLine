import React from "react";
import Purchase from "./Purchase";
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_EVENT, QUERY_TICKET } from "../../../../utils/queries";
const Ticket = ({ ticket }) => {
  // const { loading, error, data } = useQuery(QUERY_TICKET, {
  //   variables: { _id: ticket.event},
  // });
  // if (loading) return <p>Loading Ticket...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  // console.log(ticket);
  
  return (
    <div className="ticket-card">
    
      <h3>{ticket._id}</h3>
      <h3>it's a ticket</h3>
      {/* <p>{data.description}</p> */}
      <a href={ticket.url}>Video Link</a>
      {/* <Purchase ticket={ticket} /> */}
    </div>
  );
};

export default Ticket;
