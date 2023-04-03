import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../../../utils/auth";
import { ADD_USER } from "../../../utils/mutations";
import { useMainContext } from "../../../utils/GlobalState";
import { TOGGLE_LOG } from "../../../utils/actions";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "../home.css";

function SignUp(props) {
  const [state, dispatch] = useMainContext();
  const { toggledy } = state;
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        tickets: [],
        created: [],
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const toggleInUp = () => {
    dispatch({
      type: TOGGLE_LOG,
    });
  };

  return (
    <div>
      <h2 className="logtitle">Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button
            type="submit"
            className="flex  mx-auto bg-gradient-to-r from-lime-400 to-green-300 hover:from-lime-500 hover:to-green-400 text-black font-bold mt-10 py-2 px-4 mb-10 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
      <button className="logname hover:text-lime-400" onClick={toggleInUp}>
        Already have an account? Log In
      </button>
    </div>
  );
}

export default SignUp;
