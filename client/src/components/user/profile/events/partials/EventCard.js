
import React, { useState } from 'react';

const EventCard = ({eventData, handleClick}) => {
  const { _id, name, description, creator, accessKey, url, isLive, isPast, admissionPrice } = eventData;

  const [hovered, setHovered] = useState(false);

  const boxShadow = `0px 2px 4px rgba(0, 0, 0, ${hovered ? '0.4' : '0.25'})`;
  const backgroundColor = hovered ? '#fff' : '#f8f8f8';
  const cardStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '10px',
    boxShadow,
    backgroundColor,
    cursor: 'pointer'
  };

  const liveText = isLive ? "Currently Live" : "";
  const pastText = isPast ? "Past Event" : "";
  const statusText = isLive ? liveText : pastText;

  const accessText = accessKey ? "Restricted" : "Public";

  const handleIndividualClick = () => {
    handleClick(eventData);
  }

  return (

    <div className="eventcard" style={cardStyle} onClick={handleIndividualClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>
          Created by {creator.firstName} {creator.lastName}
        </p>
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
