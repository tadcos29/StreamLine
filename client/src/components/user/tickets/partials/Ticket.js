import React from 'react';
import Purchase from './Purchase'

const Ticket = ({ ticket }) => {
    return (
      <div style={{
        width: '300px',
        height: '150px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '10px',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        borderRadius: '4px',
        padding: '10px'
      }}>
        <h3>{ticket.name}</h3>
        <p>{ticket.description}</p>
        <a href={ticket.url}>Video Link</a>
        <Purchase ticket={ticket}/>
      </div>
    );
  };

export default Ticket;