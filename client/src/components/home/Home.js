import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useQuery, useState } from "@apollo/client";
import Login from "./Login/login";
import SignUp from "../../components/home/signUp/SignUp";
import { QUERY_USER } from "../../utils/queries";
import { useMainContext } from "../../utils/GlobalState";
import UserHome from "../user/UserHome";
import image from "../../assets/images/video2.png";
import "./home.css";

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
          {/* If toggledy is true, login, if false, sign up */}
          {toggledy ? <Login /> : <SignUp />}
        </>
      );
    }
  }

  return (
    <div className="home">
      <div className="grid">
        <img src={image} className="w-30 d-flex mx-auto mt-2" />
        <h1 className="title text-center"> STREAMLINE</h1>

        <div className="main">{loginStatus(user)}</div>
      </div>
    </div>
  );
};

export default Home;
