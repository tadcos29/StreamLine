
import React from "react";
import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";
// import { useQuery, useState } from '@apollo/client';
// import Login from '../../components/home/Login/Login'
// import SignUp from '../../components/home/signUp/SignUp'
// import { QUERY_USER } from '../../utils/queries'
// import { useMainContext } from '../../utils/GlobalState'


const UserNav = ({user}) => {

    return (
        <div className="container">
            <h1>`This Is User Nav. For now, you may use it to...
            <a href="/" onClick={() => Auth.logout()}>
                    Logout
                 </a> 
            </h1>
        
        </div>
          
         
     
      );
  };
  
  export default UserNav;
  