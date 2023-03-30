import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import "./user.css";
// import { useQuery, useState } from '@apollo/client';
// import Login from '../../components/home/Login/Login'
// import SignUp from '../../components/home/signUp/SignUp'
// import { QUERY_USER } from '../../utils/queries'
// import { useMainContext } from '../../utils/GlobalState'

const UserNav = ({ user }) => {
  return (
    <Navbar>
      <Navbar.Brand href="#">
        <Link to="/UserHome">
          <p>STREAMLINE</p>
        </Link>
      </Navbar.Brand>
      <Nav>
        <Nav.Item icon={<HomeIcon />}>
          <Link to="/UserHome">
            <p>HOME</p>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/Tickets">
            <p>Tickets</p>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/Profile">
            <p>Profile</p>
          </Link>
        </Nav.Item>
        <Nav.Item>
          {" "}
          <Link to="/Livestream">
            <p>Livestream</p>
          </Link>
        </Nav.Item>
        <Nav.Menu title="Events">
          <Nav.Item>
            <Link to="/UpcomingEvents">
              <p>Upcoming Events</p>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/PastEvents">
              <p>Past Events</p>
            </Link>
          </Nav.Item>
        </Nav.Menu>
      </Nav>
    </Navbar>
  );
};

export default UserNav;
