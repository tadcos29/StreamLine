import React from "react";
import Body from "./Body";
import ShowAvatar from "../partials/ShowAvatar";

const Update = ({ user }) => {
  return (
    <div>
      <div className="grid md:grid-cols-1 md:grid-cols-3">
        <div>
          <div className="profile-label mb-3"> Avatar</div>
          <div className="avatar-profile my-auto object-cover  overflow-hidden">
            <ShowAvatar user={user} style={{ borderRadius: "10px" }} />
          </div>
        </div>
        <div>
          <div className="profile-label"> First Name</div>
          <div className="profile-name">
            {" "}
            <b>{user.firstName} </b>
          </div>
        </div>
        <div>
          <div className="profile-label"> Last Name</div>
          <div className="profile-name">
            {" "}
            <b>{user.lastName}</b>
          </div>
        </div>
      </div>
      <div>
        <Body user={user} />
      </div>
    </div>
  );
};

export default Update;
