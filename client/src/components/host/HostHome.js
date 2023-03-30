import React from "react";
// import Auth from "../../utils/auth";
import { useQuery, useState } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries'
// import { useMainContext } from '../../utils/GlobalState'
// This body is the tickets body
// import Body from './Body'
// import UserNav from './UserNav'


const HostHome = () => {
    const {loading, meErr, data} = useQuery(QUERY_USER);
    let user;
    if (loading) {return (<h1>Loading HostHome...</h1>)}
    if (data) {
        user = data.user;
        console.log('got data in hosthome');
      }


    return (
        <div className="container">
            <h1>Welcome to Host Home, {user.firstName}. This is the Host Home parent component</h1>
            {/* <UserNav user={user} /> */}
            {/* <Body user={user} /> */}
        </div>
          
         
     
      );
  };
  
  export default HostHome;
  