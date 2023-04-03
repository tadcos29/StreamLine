import React, { useState, useMemo } from "react";
import { useMutation } from "@apollo/client";
import { ADD_EVENT, UPDATE_EVENT } from "../../../../utils/mutations";
import { QUERY_EVENTS } from "../../../../utils/queries";
import DatePicker from "react-datepicker";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import "react-datepicker/dist/react-datepicker.css";
import { useMainContext } from '../../../../utils/GlobalState';
import { EDIT_MODE } from "../../../../utils/actions";

import "../../../user/user.css";

import Auth from "../../../../utils/auth";

const CreateEventForm = (props) => {
  const [state, dispatch] = useMainContext();
  const {OESelectedEvent, editMode } = state
  const { user, mode } = props;
  let editFeasible=false;
  if (mode==='edit' && editMode===true && OESelectedEvent) {
    editFeasible=true;
  }
  const [addEvent, { error, data }] = useMutation(ADD_EVENT, {
    refetchQueries: [{ query: QUERY_EVENTS }],
  });
  const [updateEvent, { error:uErr, data:uData }] = useMutation(UPDATE_EVENT, {
    refetchQueries: [{ query: QUERY_EVENTS }],
  });
  let stateObj;
  console.log('selectedevent');
  console.log(OESelectedEvent);
  console.log('editmode state');
  console.log(editMode);
  console.log('editmode local');
  console.log(editMode);
  const [success, setSuccess] = useState(false);
  if (editFeasible) {
     stateObj={
      name: OESelectedEvent.name,
      description: OESelectedEvent.description,
      date: OESelectedEvent.streamTime,
      time: "",
      privacy: "",
      accessKey: OESelectedEvent.accessKey,
      url: OESelectedEvent.url,
      admissionPrice: OESelectedEvent.admissionPrice,
    }

  } else {
     stateObj={
      name: "",
      description: "",
      date: "",
      time: "",
      privacy: "",
      accessKey: "",
      url: "",
      admissionPrice: "",
    }
  }

  console.log('stateobject');
  console.log(stateObj);
  const [formData, setFormData] = useState({stateObj});
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
  
   // if the mode is to add an event, then:
   if (!editFeasible) {

      const { data } = await addEvent({
        variables: formData,
      });
      console.log(data);
      if (data && data.addEvent) {
        setSuccess(true);
      }

    } else {
      console.log('ineditupdateblock');
    // if the mode is to edit an event, then:
    const { data } = await updateEvent({
      variables: {...formData, _id: OESelectedEvent._id}
    });
    console.log(data);
    if (data && data.updateEvent) {
      setSuccess(true);
      dispatch({
        type: EDIT_MODE,
      });

    }


    }

    } catch (error) {
      console.log(error);
    }
    // setFormData({
    //   name: "",
    //   description: "",
    //   date: "",
    //   time: "",
    //   privacy: "",
    //   accessKey: "",
    //   url: "",
    //   admissionPrice: "",
    // });
  };
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

    if (mode==='edit' && !editFeasible) {
      return null;
    }
  return (
    <>
      <div class="form text-white">
        <form onSubmit={handleSubmit}>
          <legend class="section_title">{(mode==='edit') ? 'Update' : 'Create'} Event</legend>

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
            {(mode==='edit') ? 'Update' : 'Create'} Event

          </button>
        </form>
        {success && <div>Successfully {(mode==='edit') ? 'updated' : 'created'} event!</div>}
      </div>
    </>
  );
};

export default CreateEventForm;
