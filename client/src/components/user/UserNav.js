import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import HomeIcon from "@rsuite/icons/legacy/Home";
import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//icons
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import "./user.css";

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "20px",
  },
  bmBurgerBars: {
    background: "#000",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#000",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};
//SETS 'VIEW' PROPS FOR NAV BAR
function UserNav({ view, setView }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Keeps the isOpen state of the menu synced with menuOpen state.
  const handleStateChange = (state) => {
    setMenuOpen(state);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const handleMobileNav = async (location) => {
    closeMenu();
    await setView(location);
    console.log(location);
  };

  return (
    //DESKTOP
    <>
      <nav className="navlist hidden md:flex flex-col justify-between text-slate-50">
        <div
          className="navlink"
          onClick={() => {
            handleMobileNav("userhome");
          }}
        >
          <Link to="/UserHome" className="nav-item">
            <FontAwesomeIcon className="mr-5 w-5 h-5" icon={faHouse} />
            Home
          </Link>
        </div>
        <div
          className="navlink  "
          onClick={() => {
            handleMobileNav("events");
          }}
        >
          <Link to="/Events" className="nav-item">
            <FontAwesomeIcon className="mr-5 w-5 h-5" icon={faCalendarDays} />
            Your Events
          </Link>
        </div>

        <div
          className="navlink"
          onClick={() => {
            handleMobileNav("tickets");
          }}
        >
          <Link to="/Tickets" className="nav-item">
            <FontAwesomeIcon className="mr-5 w-5 h-5" icon={faTicket} />
            Your Tickets
          </Link>
        </div>

        <div
          className="navlink  "
          onClick={() => {
            handleMobileNav("profile");
          }}
        >
          <Link to="/Profile" className="nav-item">
            <FontAwesomeIcon className="mr-5 w-5 h-5" icon={faAddressBook} />
            Profile
          </Link>
        </div>
      </nav>

      {/*MOBILE*/}
      <nav className="md:hidden mb-10">
        <Menu
          styles={styles}
          width={"100vw"}
          right
          isOpen={menuOpen}
          onStateChange={({ menuOpen }) => handleStateChange(menuOpen)}
        >
          <div
            className="navlink"
            onClick={() => {
              handleMobileNav("userhome");
            }}
          >
            <Link to="/UserHome" className="nav-item">
              <FontAwesomeIcon className="mr-5 w-5 h-5" icon={faHouse} />
              Home
            </Link>
          </div>
          <div
            className="navlink  "
            onClick={() => {
              handleMobileNav("events");
            }}
          >
            <Link to="/Events" className="nav-item">
              <FontAwesomeIcon className="mr-5 w-5 h-5" icon={faCalendarDays} />
              Your Events
            </Link>
          </div>

          <div
            className="navlink"
            onClick={() => {
              handleMobileNav("tickets");
            }}
          >
            <Link to="/Tickets" className="nav-item">
              <FontAwesomeIcon className="mr-5 w-5 h-5" icon={faTicket} />
              Your Tickets
            </Link>
          </div>

          <div
            className="navlink  "
            onClick={() => {
              handleMobileNav("profile");
            }}
          >
            <Link to="/Profile" className="nav-item">
              <FontAwesomeIcon className="mr-5 w-5 h-5" icon={faAddressBook} />
              Profile
            </Link>
          </div>
          <div
            className="navlink"
            onClick={() => {
              handleMobileNav("livestream");
            }}
          >
            <Link to="/Livestream" className="nav-item">
              <FontAwesomeIcon className="mr-5 w-5 h-5" icon={faTicket} />
              Livestream
            </Link>
          </div>
          <div
            className="navlink"
            onClick={() => {
              handleMobileNav("createEvent");
            }}
          >
            <Link to="/CreateEvent" className="nav-item">
              <FontAwesomeIcon className="mr-5 w-5 h-5" icon={faTicket} />
              CreateEvent
            </Link>
          </div>

          <div
            className="navlink"
            onClick={() => {
              handleMobileNav("logout");
            }}
          >
            <Link to="/Logout" className="nav-item">
              <FontAwesomeIcon className="mr-5 w-5 h-5" icon={faTicket} />
              Logout
            </Link>
          </div>
        </Menu>
      </nav>
    </>
  );
}
export default UserNav;
