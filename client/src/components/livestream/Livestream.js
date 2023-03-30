import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useQuery, useState } from '@apollo/client';
// import Login from '../../home/Login/Login'
// import SignUp from '../../components/home/signUp/SignUp'
import { QUERY_USER } from '../../utils/queries'
import { useMainContext } from '../../utils/GlobalState'

import LivestreamBody from './LivestreamBody'


const Livestream = () => {
    const {loading, meErr, data} = useQuery(QUERY_USER);
    let user;
    if (loading) {return (<h1>Loading Livestream...</h1>)}
    if (meErr) {return (<h1>Error!</h1>)}
    if (data) {
        user = data.user;
        console.log('got data in livestream');
      }


    return (
        <div className="container">
            <h2>
                This is the Livestream Page which has been called by the Body(User)<p/>
                You are {user.firstName}. It hosts the LivestreamBody component:</h2>
                <LivestreamBody user={user}/>
                </div>
      
          
         
     
      );
  };
  
  export default Livestream;
  