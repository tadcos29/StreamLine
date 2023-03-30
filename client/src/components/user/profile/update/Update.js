import React from 'react';
import Body from './Body'

const Update = ({ user }) => {
    return (
      <div>
      <h1>This is the Update component. It has a Body, too...</h1>
      <Body user={user}/>
      </div>
    );
  };

export default Update;