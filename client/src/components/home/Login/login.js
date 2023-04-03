import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../../../utils/mutations";
import Auth from "../../../utils/auth";
import { useMainContext } from "../../../utils/GlobalState";
import { TOGGLE_LOG } from "../../../utils/actions";

function Login(props) {
  const [state, dispatch] = useMainContext();
  const { toggledy } = state;
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };
  const toggleInUp = () => {
    dispatch({
      type: TOGGLE_LOG,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <h2 className="logtitle">Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
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
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
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
        Not a member yet? Sign Up
      </button>
    </div>
  );
}

export default Login;
