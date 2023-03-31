import React from 'react';

const EventCard = ({ event }) => {
  const { name, description, creator, accessKey, url, isLive, isPast, admissionPrice } = event;

  const boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.25)';
  const cardStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '10px',
    boxShadow
  };

  const liveText = isLive ? 'Currently Live' : '';
  const pastText = isPast ? 'Past Event' : '';
  const statusText = isLive ? liveText : pastText;

  const accessText = accessKey ? 'Restricted' : 'Public';

  return (
    <div style={cardStyle}>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Created by {creator.firstName} {creator.lastName}</p>
      </div>
      <div>
        <p>{statusText}</p>
        <p>{accessText}</p>
        <p>{url}</p>
        <p>{admissionPrice}</p>
      </div>
    </div>
  );
};

export default EventCard;