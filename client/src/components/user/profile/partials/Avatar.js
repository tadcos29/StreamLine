import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

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
    // Send a POST request to the /upload endpoint with the FormData object as the body
    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    setImageUrl(data.url);

    // Log the response to the console
    
    console.log(response);
    console.log('supposedly done');
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