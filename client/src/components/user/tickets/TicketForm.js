import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TICKET } from '../../../utils/mutations';

const TicketForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [addTicket, { loading, error }] = useMutation(ADD_TICKET);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      await addTicket({
        variables: {
          name:name,
        //   description:description
          
        }
      });
      setName('');
      setDescription('');
    } catch (err) {
        console.log('incatchmentticketform');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlForm="name">Title:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlForm="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button type="submit">Create Ticket</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error creating ticket!</p>}
      {<p>Ticket Created</p>}
    </form>
  );
};

export default TicketForm;