import React from "react";
import Purchase from "./Purchase";
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_EVENT, QUERY_TICKET } from "../../../../utils/queries";
import { Link, NavLink } from "react-router-dom";
import "../../../../assets/fonts/ravenda/hidden.css"

const Ticket = ({ ticket }) => {
  // const { loading, error, data } = useQuery(QUERY_TICKET, {
  //   variables: { _id: ticket.event},
  // });
  // if (loading) return <p>Loading Ticket...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  console.log(ticket);

  const handleLinkClick = (event) => {
    const linkUrl = event.target.getAttribute('data-url');
    console.log(linkUrl);
    localStorage.setItem('linkurl', linkUrl);
  };

  const isLive = ticket.event.isLive
  console.log(isLive)

  return (
    <div className="ticket-card">
      <h5>Your exclusive ticket for...</h5>
      <h2><b>{ticket.event.name}</b></h2>
      <p>You purchased it on {ticket.purchaseDate}. The broadcast date is {ticket.event.streamTime}</p>
      {isLive ? (
        <Link to="/Livestream" className='link' id='link' onClick={handleLinkClick} data-url={ticket.event.url}>
          View Livestream
        </Link>      
      ) : (
        <Link to="/Livestream" className='hide' id='link' onClick={handleLinkClick} data-url={ticket.event.url}>
          View Livestream
        </Link> 
      )}
      {/* <Purchase ticket={ticket} /> */}
    </div>
  );
}

export default Ticket;
