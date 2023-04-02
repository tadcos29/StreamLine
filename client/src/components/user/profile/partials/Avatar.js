import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../../../utils/mutations';
import {QUERY_USER} from '../../../../utils/queries'
import { Base64 } from 'js-base64';

function Avatar() {
  // Declare a state variable to store the selected file
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  // const [uploadImage] = useMutation(UPLOAD_AVATAR);

  // When a user selects a file, set the state variable to that file
  const handleFileInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // When the form is submitted, create a new FormData object and append the selected file to it
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();

    // Append the selected file to the FormData object
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

    
 
    let reparsed=JSON.parse(stringied);

    console.log(reparsed);

    const blob = new Blob([new Uint8Array(reparsed.data.data)], {type: reparsed.contentType});
    let objUrl=URL.createObjectURL(blob);
    setImageUrl(objUrl)

    //





  
  };

  return (
    <div>
      <h1>Upload Avatar</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="file" name="file" onChange={handleFileInputChange} />

        <button type="submit" disabled={!selectedFile}>
          Submit
        </button>
      </form>
      {imageUrl && (
        <img src={imageUrl} alt="Uploaded avatar" style={{ maxWidth: '100%' }} />
      )}
    </div>
  );
}

export default Avatar;