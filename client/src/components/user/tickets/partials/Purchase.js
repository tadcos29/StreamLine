import React from 'react';

const Purchase = ({ ticket }) => {
    return (
      <div style={{
        fontSize: '9px',
        width: '160px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '0px',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        borderRadius: '4px',
        padding: '0px'
      }}> purchase component for {ticket.name}
      </div>
    );
  };

export default Purchase;