import React from "react";
import Purchase from "./Purchase";

const Ticket = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <h3>{ticket.name}</h3>
      <p>{ticket.description}</p>
      <a href={ticket.url}>Video Link</a>
      <Purchase ticket={ticket} />
    </div>
  );
};

export default Ticket;
