import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../../../utils/mutations';
import {QUERY_USER} from '../../../../utils/queries'
import Auth from '../../../../utils/auth';
import UpdateUserForm from './UpdateUserForm';
import Avatar from '../partials/Avatar'

const Body = ({ user }) => {

    const [updateUser, {error, data}] = useMutation(UPDATE_USER, {
      refetchQueries: [{ query: QUERY_USER }],
    });

    const handleUpdateUser = async (formData) => {
    console.log('inhandleupdate');
    console.log(formData);
    try {
      const response = await updateUser({
        variables: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password:formData.password
        }
      });
    } catch (error) {
      console.error(error);
    }
 
  };
    return (
      <div>
      <Avatar/>
      <h1>This is the Update component's body component.</h1><br/>
      <h1>At last, a form.</h1>
      <div>
      <UpdateUserForm user={user} onUpdate={handleUpdateUser} />
         </div>
      </div>
    );
  };

export default Body;