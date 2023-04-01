import React from "react";
import ReactDOM from "react-dom";
import { Menu } from "antd";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Auth from "../../utils/auth";
import { FaTicketAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillPersonFill, BsPower } from "react-icons/bs";
import { ImVideoCamera, ImHome } from "react-icons/im";
import { MdDashboardCustomize } from "react-icons/md";

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
    background: "#fff",
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
    background: "#111",
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
      <nav className=" h-1/3 hidden md:flex flex-col justify-between w-full text-slate-50">
        <div
          className="navlink hover:navhover"
          onClick={() => {
            handleMobileNav("about");
          }}
        >
          <p className="navlabel">About Me</p>
        </div>
        <div
          className="navlink hover:navhover"
          onClick={() => {
            handleMobileNav("projects");
          }}
        >
          <p>Works</p>
        </div>
        <div
          className="navlink hover:navhover"
          onClick={() => {
            handleMobileNav("resume");
          }}
        >
          <p>Skills</p>
        </div>
        <div
          className="navlink hover:navhover"
          onClick={() => {
            handleMobileNav("contact");
          }}
        >
          <p>Contact</p>
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
          <div className="h-1/2 flex flex-col justify-between w-full">
            <div
              className="mobile-link"
              onClick={() => {
                handleMobileNav("events");
              }}
            >
              <Link to="/Events" className="nav-item">
                What`s On
              </Link>
            </div>
            <div
              className="mobile-link"
              onClick={() => {
                handleMobileNav("tickets");
              }}
            >
              icon={<ImHome />}
              <Link to="/Tickets" className="nav-item">
                Your Tickets
              </Link>
            </div>
            <div
              className="mobile-link"
              onClick={() => {
                handleMobileNav("profile");
              }}
            >
              <Link to="/Profile" className="nav-item">
                Profile
              </Link>
            </div>
            <div
              className="mobile-link"
              onClick={() => {
                handleMobileNav("livestream");
              }}
            >
              <Link to="/Livestream" className="nav-item">
                Live Now
              </Link>
            </div>
            {/* Resume Download */}
          </div>
        </Menu>
      </nav>
    </>
  );
}
export default UserNav;
