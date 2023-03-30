import React from "react";
import Auth from "../../utils/auth";
import UserNav from "./UserNav";
// import { Link } from "react-router-dom";
// import { useQuery, useState } from '@apollo/client';
// import Login from '../../components/home/Login/Login'
// import SignUp from '../../components/home/signUp/SignUp'
// import { QUERY_USER } from '../../utils/queries'
// import { useMainContext } from '../../utils/GlobalState'


const Header = (props) => {

    return (
        <div>
        <h1>This Is User Header. It wraps UserNav, sending on its props</h1>
        <UserNav {...props} />
        </div>
    );
  };
  
  export default Header;