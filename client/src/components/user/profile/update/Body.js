import React from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../../../utils/mutations';
import UpdateUserForm from './UpdateUserForm';
const Body = ({ user }) => {

    const [updateUser, {error, data}] = useMutation(UPDATE_USER);

    const handleUpdateUser = async (formData) => {
    console.log('inhandleupdate');
    console.log(formData);
    const response =await updateUser({
      variables: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password:formData.password
      }
    });
        console.error(error);
    

  };
    return (
      <div>
      <h1>This is the Update component's body component.</h1><br/>
      <h1>At last, a form.</h1>
      <div>
      <UpdateUserForm user={user} onUpdate={handleUpdateUser} />
         </div>
      </div>
    );
  };

export default Body;