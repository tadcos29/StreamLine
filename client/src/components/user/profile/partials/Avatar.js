import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_USER } from '../../../../utils/mutations';
import {QUERY_USER} from '../../../../utils/queries'
import { Base64 } from 'js-base64';
import ShowAvatar from './ShowAvatar'

function Avatar({user}) {
  // Declare a state variable to store the selected file
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  // const [uploadImage] = useMutation(UPLOAD_AVATAR);
  const [updateUser, {error, data}] = useMutation(UPDATE_USER, 
    
    {
      refetchQueries: [{ query: QUERY_USER }],
    }
    
    );
  // set the state variable to selected file
  const handleFileInputChange = (e) => {
    setSelectedFile(e.target.files[0])
    setImageUrl(selectedFile)
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();

    formData.append('file', selectedFile);
    // let stringified=JSON.stringify(selectedFile);
    // console.log(selectedFile);
    // console.log(stringified)
    // let destringified=JSON.parse(stringified);




    // Send a POST request to the /upload endpoint with the FormData object as the body
    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();

    
    /// RIGHT

    let actualFile=data.file;
    let stringied=JSON.stringify(actualFile);

    try {
      const response = await updateUser({
        variables: {
          avatar: stringied
        }
      });
    } catch (error) {
      console.error(error);
    }


   

    //





  
  };

  return (
    <div>
      <h1>Upload Avatar, {user.firstName}</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="file" name="file" onChange={handleFileInputChange} />

        <button type="submit" disabled={!selectedFile}>
          Submit
        </button>
      </form>
      
      {(imageUrl) ? (
        <img src={imageUrl} alt="Uploaded avatar" style={{ maxWidth: '100%', height: 'auto' }} />
      ) : (<ShowAvatar user={user} style={{ maxWidth: '100%', height: 'auto' }}/> )}
    </div>
  );
}

export default Avatar;