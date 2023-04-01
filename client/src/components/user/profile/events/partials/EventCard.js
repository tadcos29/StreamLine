import React, { useState } from "react";
import "../../../user.css";
import { Link } from "react-router-dom";
import image from "../../../../../assets/images/ticketbg-1.png";
const EventCard = ({ eventData, handleClick }) => {
  const {
    _id,
    name,
    description,
    creator,
    accessKey,
    url,
    isLive,
    isPast,
    admissionPrice,
  } = eventData;

  const [hovered, setHovered] = useState(false);

  const liveText = isLive ? "Currently Live" : "";
  const pastText = isPast ? "Past Event" : "";
  const statusText = isLive ? liveText : pastText;

  const accessText = accessKey ? "Restricted" : "Public";

  const handleIndividualClick = () => {
    handleClick(eventData);
  };

  return (
    <div
      className="eventcard text-sky-50"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        padding: "20px",
        display: "flex",
        flexDirection: "row",
      }}
      onClick={handleIndividualClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-1/2">
        <h3 className="ticketname">{name}</h3>
        <p className="my-2">{description}</p>
        <p>
          Created by {creator.firstName} {creator.lastName}
        </p>
      </div>
      <div className="w-1/2 text-right">
        <p> {statusText}</p>
        <p>{accessText}</p>
        <p>{url}</p>
        <p>{admissionPrice} $5.00</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-5 mt-10 py-2 px-4 rounded-md">
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;
