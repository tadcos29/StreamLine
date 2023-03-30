import React from 'react';
import Update from './update/Update'

const Body = ({ user }) => {
    return (
      <div>
      <h1>This is the Body component of {user.firstName} {user.lastName}'s profile, not to be confused with many other Body components strewn about.</h1>
      <h2>It hosts I think? this here User Update component?</h2>
      <Update user={user}/>
      </div>
    );
  };

export default Body;