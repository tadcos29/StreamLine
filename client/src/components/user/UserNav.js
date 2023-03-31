import React from "react";
import ReactDOM from "react-dom";
import Auth from "../../utils/auth";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav} from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import { FaTicketAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillPersonFill, BsPower } from "react-icons/bs";
import { ImVideoCamera } from "react-icons/im";

import "./user.css";
// import { useQuery, useState } from '@apollo/client';
// import Login from '../../components/home/Login/Login'
// import SignUp from '../../components/home/signUp/SignUp'
// import { QUERY_USER } from '../../utils/queries'
// import { useMainContext } from '../../utils/GlobalState'
// const NavLink = props => <Nav.Item componentClass={Link} {...props} />;

const CustomUserNav = ({ user, onSelect, activeKey, ...props }) => {
    return (
      <Navbar {...props} className="navbar">
        <Nav>
          <Nav.Item icon={<HomeIcon />} className="nav">
            <Link to="/UserHome" className="nav-item">
              <p>HOME</p>
            </Link>
          </Nav.Item>
          <Nav.Item icon={<FaTicketAlt />}>
            <Link to="/Tickets" className="nav-item">
              <p>Tickets</p>
            </Link>
          </Nav.Item>
          <Nav.Item icon={<BsFillPersonFill />}>
            <Link to="/Profile" className="nav-item">
              <p>Profile</p>
            </Link>
          </Nav.Item>
          <Nav.Item icon={<ImVideoCamera />}>
            <Link to="/Livestream" className="nav-item">
              <p>Livestream</p>
            </Link>
          </Nav.Item>
          <Nav.Menu title="Events" icon={<FaCalendarAlt />} className="nav-item">
            <Nav.Item>
              <Link to="/UpcomingEvents" className="subnav-item">
                <p>Upcoming Events</p>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/PastEvents" className="subnav-item">
                <p>Past Events</p>
              </Link>
            </Nav.Item>
          </Nav.Menu>
          <Nav.Item icon={<BsPower />}>
            <Link to="/" onClick={() => Auth.logout()} className="nav-item">
              <p>Logout</p>
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    );
  };
  const UserNav = () => {
    const [activeKey, setActiveKey] = React.useState(null);
  
    return (
      <>
        <CustomUserNav
          appearance="inverse"
          activeKey={activeKey}
          onSelect={setActiveKey}
        />
      </>
    );
  };
  
  export default UserNav;
