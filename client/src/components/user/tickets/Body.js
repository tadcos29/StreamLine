import React from "react";
import Auth from "../../../utils/auth";
import { Link } from "react-router-dom";
import { useQuery, useState } from '@apollo/client';
import UserLogin from '../../../components/home/userLogin/UserLogin'
// import SignUp from '../../components/home/signUp/SignUp'
import { QUERY_USER } from '../../../utils/queries'
import { useMainContext } from '../../../utils/GlobalState'

import Tickets from '../tickets/Tickets'


const TBody = () => {
    const {loading, meErr, data} = useQuery(QUERY_USER);
    let user;
    if (data) {
        user = data.user;
        console.log('got data in userhome');
      }


    return (
        <div className="container">
            <h2>This is the Tickets Body component, not to be confused with the User Body component</h2>
            {user.tickets ? (
                    <>
                      <h1>There might be tickets</h1>
                      <Tickets/>
                    </>
                  ) : (
                    <h1>You have no tickets</h1>
                  )}
                </div>
      
          
         
     
      );
  };
  
  export default TBody;
  