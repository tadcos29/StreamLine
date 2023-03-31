import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useQuery, useState } from "@apollo/client";
import Login from "./melissa/Login";
import SignUp from "../../components/home/signUp/SignUp";
import { QUERY_USER } from "../../utils/queries";
import { useMainContext } from "../../utils/GlobalState";
import UserHome from "../user/UserHome";

const Home = () => {
  const [state, dispatch] = useMainContext();
  const { toggledy } = state;
  console.log(`toggledy ${toggledy}`);
  // The state variable toggledy has the sole function of switching between the 'login' and
  // 'signup' components in the home page. It's overkill to make this a state variable, but I wanted
  // a simple one to test the cohesion of moving parts. -T
  const { loading, meErr, data } = useQuery(QUERY_USER);
  console.log(`home query ${data}`);
  let user;
  if (data) {
    user = data.user;
    console.log("got data");
  }
  function loginStatus(user) {
    if (Auth.loggedIn()) {
      return (
        // Reminder: the empty tag below is a Fragment tag, unique to JSX
        // It satisfies the cardinal rule of having to return a single div
        // without having to actually inject an extra div into the final html
        <>
          {user ? (
            user.isHost ? (
              <>
                <h1>Welcome back, HOST {user.firstName}</h1>
              </>
            ) : (
              <>
                <h1>Welcome back, {user.firstName}</h1>
                <Link to="/UserHome">
                  <p>Go Home</p>
                </Link>
              </>
            )
          ) : (
            <h1>Loading...</h1>
          )}
        </>
      );
    } else {
      return (
        <>
          <h1>Nope, You Are Not Logged In</h1>
          {/* If toggledy is true, login, if false, sign up */}
          {toggledy ? <Login /> : <SignUp />}
        </>
      );
    }
  }

  return (
    <div className="container">
      <h1>Welcome to Ticket Hosting</h1>
      {loginStatus(user)}
    </div>
  );
};

export default Home;
