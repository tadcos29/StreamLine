import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import Avatar from "../partials/Avatar";
import { updateUser } from "../../../../utils/mutations";
// import { getUser } from '../graphql/queries';

const UpdateUserForm = ({ user, onUpdate }) => {
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <Avatar user={user} />
      </div>
      <button
        className=" text-sm md:text-xl flex  mx-auto bg-gradient-to-r from-lime-400 to-green-300 hover:from-lime-500 hover:to-green-400 text-black font-bold py-2 px-4 mb-10 rounded-md"
        type="submit"
      >
        Update
      </button>
    </form>
  );
};

export default UpdateUserForm;
