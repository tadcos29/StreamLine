import React from "react";
import Auth from "../../utils/auth";
import UserNav from "./UserNav";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./user.css";

const Header = (props) => {
  return (
    <div className="header-container flex my-0 w-5/6 md:h-auto md:flex-col md:w-64 md:min-w-[16rem] md:header-border md:p-5 md:pt-10">
      <h1 className="h1header">Streamline</h1>
      <div className=" flex md:flex-col h-full justify-between">
        <div>
          <UserNav {...props} />
        </div>

        <Link
          className="logout text-slate-50"
          to="/"
          onClick={() => Auth.logout()}
        >
          <FontAwesomeIcon className="mr-5 w-5 h-5" icon={faRightFromBracket} />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Header;