import React, { useState, useMemo } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_EVENT } from '../../../../utils/mutations';
import { QUERY_EVENTS } from '../../../../utils/queries';
// import CurrencyInput from 'react-currency-input-field';


import Auth from '../../../../utils/auth';

const CreateEventForm = () => {
    const [addEvent, { error, data }] = useMutation(ADD_EVENT, {
        refetchQueries: [{ query: QUERY_EVENTS }]
      });
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    accessKey: '',
    url: '',
    admissionPrice: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        console.log('informdata');
        console.log(formData);
        const parsedPrice = formData.admissionPrice !== '' ? parseFloat(formData.admissionPrice) : 0;
        formData.admissionPrice=parsedPrice;
        const { data } = await addEvent({ 
            variables: formData
        });
        console.log(data);
        if (data && data.addEvent) {
          setSuccess(true);
        }
      } catch (error) {
        console.log(error);
      }
      setFormData({
        name: '',
        description: '',
        accessKey: '',
        url: '',
        admissionPrice: ''
      });
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlForm="name">Name *</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlForm="description">Description</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <label htmlForm="accessKey">Access Key</label>
      <input
        id="accessKey"
        name="accessKey"
        type="text"
        value={formData.accessKey}
        onChange={handleChange}
      />
      <label htmlForm="url">URL</label>
      <input
        id="url"
        name="url"
        type="text"
        value={formData.url}
        onChange={handleChange}
      />
            <label htmlForm="admissionPrice">Admission Price</label>
      <input
        id="admissionPrice"
        name="admissionPrice"
        type="number"
        step="0.01"
        value={formData.admissionPrice}
        onChange={handleChange}
      />
      <button type="submit">Create Event</button>
    </form>
    {success && <div>Successfully created event!</div>}
    </>
  );
};

export default CreateEventForm;