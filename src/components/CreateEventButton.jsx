import React, { useContext } from 'react';
import plusImg from '../assets/plus.svg';
import GlobalContext from '../context/GlobalContext';

const CreateEventButton = () => {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border =-2 rounded-full flex items-center shadow-md hover:shadow-lg"
    >
      <img src={plusImg} alt="Create Event" className="w-7 h-7 " />
      <span className="pl-3 pr-7">Create New Event</span>
    </button>
  );
};

export default CreateEventButton;
