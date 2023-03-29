import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useQuery, useState } from '@apollo/client';
import UserLogin from '../../components/home/userLogin/UserLogin'
// import SignUp from '../../components/home/signUp/SignUp'
import { QUERY_USER } from '../../utils/queries'
import { useMainContext } from '../../utils/GlobalState'
// This body is the Tickets body
import TBody from './tickets/Body'


const Body = ({user}) => {
 

    return (
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'row', height: '50vh' }}>
                <div style={{ width: '50%', height: '100%', backgroundColor: '#FF6961' }}>
                <h1>These four coloured squares comprise the User Body Component, not to be confused with the tickets one.</h1>
                </div>
                <div style={{ width: '50%', height: '100%', backgroundColor: '#ADD8E6' }}>
                <TBody user={user}/>
                </div>
           </div>
           <div style={{ display: 'flex', flexDirection: 'row', height: '50vh' }}>
                <div style={{ width: '50%', height: '100%', backgroundColor: '#77DD77' }}>
                <h1>Green Square</h1>
                </div>
                <div style={{ width: '50%', height: '100%', backgroundColor: '#FFFACD' }}>
                
                </div>
           </div>
         
            

       
           
        </div>
          
         
     
      );
  };
  
  export default Body;
  