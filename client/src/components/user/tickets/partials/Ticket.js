import React from "react";
import Purchase from "./Purchase";

const Ticket = ({ ticket }) => {
  console.log(ticket);
  return (
    <div className="ticket-card">
    
      <h3>{ticket._id}</h3>
      <h3>it's a ticket</h3>
      <p>{ticket.description}</p>
      <a href={ticket.url}>Video Link</a>
      <Purchase ticket={ticket} />
    </div>
  );
};

export default Ticket;
