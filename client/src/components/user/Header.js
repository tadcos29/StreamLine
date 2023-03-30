import React from "react";
import Auth from "../../utils/auth";
import UserNav from "./UserNav";
import "./user.css";

// import { Link } from "react-router-dom";
// import { useQuery, useState } from '@apollo/client';
// import Login from '../../components/home/Login/Login'
// import SignUp from '../../components/home/signUp/SignUp'
// import { QUERY_USER } from '../../utils/queries'
// import { useMainContext } from '../../utils/GlobalState'

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header">
        <h1 className="h1header">Streamline</h1>
        <div className="nav-div">
          <UserNav {...props} className="nav-container" />
        </div>
      </div>
    </div>
  );
};

export default Header;
