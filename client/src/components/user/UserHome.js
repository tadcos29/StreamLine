import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useQuery, useState } from '@apollo/client';
import UserLogin from '../../components/home/userLogin/UserLogin'
// import SignUp from '../../components/home/signUp/SignUp'
import { QUERY_USER } from '../../utils/queries'
import { useMainContext } from '../../utils/GlobalState'
// This body is the tickets body
import Body from './Body'
import UserNav from './UserNav'


const UserHome = () => {
    const {loading, meErr, data} = useQuery(QUERY_USER);
    let user;
    if (data) {
        user = data.user;
        console.log('got data in userhome');
      }


    return (
        <div className="container">
            <h1>Welcome to User Home, {user.firstName}. This is the User Home parent component</h1>
            <UserNav user={user} />
            <Body user={user} />
        </div>
          
         
     
      );
  };
  
  export default UserHome;
  