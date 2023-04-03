import CreateEventForm from "./CreateForm";
import React from "react";
// import Auth from "../../utils/auth";
import { useQuery, useState } from "@apollo/client";
import { QUERY_USER } from "../../../../utils/queries";
// import { useMainContext } from '../../utils/GlobalState'
// This body is the tickets body
import Header from "../../../user/Header";
import TopNav from "../../../user/TopBar";
import image from "../../../../assets/images/background8.png";

import "../../../user/user.css";

const CreateEvent = () => {
  const { loading, meErr, data } = useQuery(QUERY_USER);
  let user;
  if (loading) {
    return <h1>Loading UserHome...</h1>;
  }
  if (data) {
    user = data.user;
    console.log("got data in userhome");
  }

  return (
    <div className="background">
      <div className="home-contain h-screen mx-auto my-0 md:flex flex-row text-main-text font-main">
        <div>
          <Header user={user} />
        </div>
        <div className="w-full">
          <div>
            <TopNav user={user} />
          </div>
          <div className="body-container ">
            <CreateEventForm user={user} mode={'create'} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateEvent;
