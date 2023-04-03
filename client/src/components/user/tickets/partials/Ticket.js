import React from "react";
import Purchase from "./Purchase";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "../../../../assets/fonts/ravenda/hidden.css";

const Ticket = ({ ticket }) => {
  // const { loading, error, data } = useQuery(QUERY_TICKET, {
  //   variables: { _id: ticket.event},
  // });
  // if (loading) return <p>Loading Ticket...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  console.log(ticket);

  const handleLinkClick = (event) => {
    const linkUrl = event.target.getAttribute("data-url");
    console.log(linkUrl);
    localStorage.setItem("linkurl", linkUrl);
  };

  const isLive = ticket.event.isLive;
  console.log(isLive);

  return (
    <div
      className="ticketcard bg-lime-300 pr-0 rounded-lg"
      style={{
        marginBottom: "20px",
        paddingTop: "30px",
        paddingRight: "40px",
        paddingBottom: "30px",
        paddingLeft: "30px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div className="w-full grid grid-cols-6">
        <h5 className="ticket-bio text-lg col-span-6 mb-4">
          Your exclusive ticket for...
        </h5>

        <div className="col-span-3">
          <h2 className="ticket-title text-4xl mb-4">
            <b>{ticket.event.name}</b>
          </h2>
          <h2 className="text-lg ticket-bio">
            <b>{ticket.event.streamTime}</b>
          </h2>
        </div>
        <div className="col-span-3 text-right justify-end mb-7">
          {isLive ? (
            <Link
              to="/Livestream"
              id="link"
              onClick={handleLinkClick}
              data-url={ticket.event.url}
              className="streamlink bg-gray-900 bg-gradient-to-r hover:bg-teal-900 font-bold ml-5 py-4 px-4 rounded-md"
            >
                View Livestream
                <FontAwesomeIcon
                  className="text-right ml-2 w-5 h-5"
                  icon={faCirclePlay}
                />{" "}
            </Link>
          ) : (
            <Link
              to="/Livestream"
              className="hide"
              id="link"
              onClick={handleLinkClick}
              data-url={ticket.event.url}
            >
              View Livestream
            </Link>
          )}
        </div>
        <p className="ticket-bio col-span-6  text-right">
          You downloaded this ticket on {ticket.purchaseDate}
        </p>

        {/* <Purchase ticket={ticket} /> */}
      </div>
    </div>
  );
};

export default Ticket;
