import React from 'react';

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: () => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: () => {},
  daySelected: null,
  setDaySelected: () => {},
  showEventModal: false,
  setShowEventModal: () => {},
  savedEvents: [],
  dispatchCallEvent: () => {},
  selectedEvent: null,
  setSelectedEvent: () => {},
});

export default GlobalContext;
