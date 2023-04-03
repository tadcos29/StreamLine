import React, { useState, useMemo } from "react";
import { useMutation } from "@apollo/client";
import { ADD_EVENT } from "../../../../utils/mutations";
import { QUERY_EVENTS } from "../../../../utils/queries";
import DatePicker from "react-datepicker";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import "react-datepicker/dist/react-datepicker.css";

import "../../../user/user.css";

import Auth from "../../../../utils/auth";

const CreateEventForm = () => {
  const [addEvent, { error, data }] = useMutation(ADD_EVENT, {
    refetchQueries: [{ query: QUERY_EVENTS }],
  });
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    privacy: "",
    accessKey: "",
    url: "",
    admissionPrice: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("informdata");
      console.log(formData);
      const parsedPrice =
        formData.admissionPrice !== ""
          ? parseFloat(formData.admissionPrice)
          : 0;
      formData.admissionPrice = parsedPrice;
      const { data } = await addEvent({
        variables: formData,
      });
      console.log(data);
      if (data && data.addEvent) {
        setSuccess(true);
      }
    } catch (error) {
      console.log(error);
    }
    setFormData({
      name: "",
      description: "",
      date: "",
      time: "",
      privacy: "",
      accessKey: "",
      url: "",
      admissionPrice: "",
    });
  };

  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

  return (
    <>
      <div class="form text-sky-800">
        <form onSubmit={handleSubmit}>
          <legend class="section_title">Create Event</legend>

          <div className="inline-form">
            <div className="inline-form-element">
              <label htmlForm="name"> Event Name </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="inline-form-element2">
              <label htmlForm="date">Date & Time</label>
              <DatePicker
                id="date"
                name="date"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
                value={formData.date}
              />
            </div>
          </div>
          <div className="inline-form">
            <div className="inline-form-element">
              <label htmlForm="description">Description</label>
              <textarea
                id="description"
                name="description"
                type="text"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="inline-form-element2">
              <label htmlForm="admissionPrice">Admission Price</label>
              <div class="input-icon">
                <i className="mx-5">$</i>
                <input
                  className="px-10"
                  id="admissionPrice"
                  name="admissionPrice"
                  placeHolder="0.00"
                  type="number"
                  step="0.01"
                  value={formData.admissionPrice}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="inline-form">
            <div className="inline-form-element">
              <label htmlForm="accessKey">Access Key</label>
              <input
                id="accessKey"
                name="accessKey"
                type="text"
                placeHolder="ABCD1234"
                value={formData.accessKey}
                onChange={handleChange}
              />
            </div>

            <div className="inline-form-element2">
              <label htmlForm="privacy">Privacy</label>
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                value={formData.privacy}
                onChange={handleChange}
              />
              <p className="mt-0 text-sm">Make Event Private</p>
            </div>
          </div>

          <div className="form-url">
            <input
              id="url"
              name="url"
              type="text"
              placeHolder="Insert Livestream URL here once event has begun"
              value={formData.url}
              onChange={handleChange}
            />
          </div>

          <button className="flex  mx-auto bg-gradient-to-r from-lime-400 to-green-300 hover:from-lime-500 hover:to-green-400 text-black font-bold mt-10 py-2 px-4 mb-10 rounded-md">
            Create Event
          </button>
        </form>
        {success && <div>Successfully created event!</div>}
      </div>
    </>
  );
};

export default CreateEventForm;
