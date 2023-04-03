import React from "react";
import Header from "../user/Header";
import TopNav from "../user/TopBar";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useQuery, useState } from "@apollo/client";
// import Login from '../../home/Login/Login'
// import SignUp from '../../components/home/signUp/SignUp'
import { QUERY_USER } from "../../utils/queries";
import { useMainContext } from "../../utils/GlobalState";

import LivestreamBody from "./LivestreamBody";

const Livestream = () => {
  const { loading, meErr, data } = useQuery(QUERY_USER);
  let user;
  if (loading) {
    return <h1>Loading Livestream...</h1>;
  }
  if (meErr) {
    return <h1>Error!</h1>;
  }
  if (data) {
    user = data.user;
    console.log("got data in livestream");
  }

  return (
    <div className="container">
      <div className="home-contain h-screen mx-auto my-0 bg-main-bg md:flex flex-row text-main-text font-main">
        <div>
          <Header user={user} />
        </div>
        <div className="w-full">
          <div>
            <TopNav user={user} />
          </div>

          <LivestreamBody user={user} />
        </div>
      </div>
    </div>
  );
};

export default Livestream;
