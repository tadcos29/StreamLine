import React, { useState } from "react";
import "../../../user.css";
import { Link } from "react-router-dom";
import image from "../../../../../assets/images/ticketbg-1.png";
import { dollarFormat } from '../../../../../utils/helpers';
import ShowAvatar from "../../partials/ShowAvatar";
const EventCardHome = ({eventData, handleClick}) => {
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
  
 let formattedCurrency= dollarFormat(admissionPrice)
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
    
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
  ><ShowAvatar user={creator} style={{}}/>
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
      <p>{formattedCurrency}</p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-5 mt-10 py-2 px-4 rounded-md" onClick={handleIndividualClick}>
        View Details
      </button>
    </div>
  </div>
  );
};

export default EventCardHome;