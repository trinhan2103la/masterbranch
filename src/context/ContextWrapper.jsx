import React, { useEffect, useReducer, useState } from 'react';
import dayjs from 'dayjs';
import GlobalContext from './GlobalContext';

function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case 'push':
      return [...state, payload];
    case 'update':
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case 'delete':
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error('Unknown action type');
  }
}

function initEvents() {
  const storageEvents = localStorage.getItem('savedEvents');
  if (storageEvents) {
    return JSON.parse(storageEvents);
  }
  return [
    {
      id: 1,
      title: 'Họp nhóm dự án',
      description: 'Thảo luận tiến độ và kế hoạch tiếp theo.',
      startTime: '10:00',
      endTime: '11:30',
      label: 'bg-indigo-500',
      day: dayjs('2025-02-15').valueOf(),
      url: '',
    },
    {
      id: 2,
      title: 'Deadline bài tập',
      description: 'Nộp bài trước thời hạn.',
      startTime: '23:59',
      endTime: '23:59',
      label: 'bg-red-500',
      day: dayjs('2025-03-28').valueOf(),
      url: '',
    },
    {
      id: 3,
      title: 'Sự kiện công ty',
      description: 'Gala dinner công ty, có tiệc buffet.',
      startTime: '18:00',
      endTime: '21:00',
      label: 'bg-orange-500',
      day: dayjs('2025-04-03').valueOf(),
      url: '',
    },
  ];
}

export default function ContextWrapper({ children }) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [savedEvents, dispatchCallEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  useEffect(() => {
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  }, [savedEvents]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        savedEvents,
        dispatchCallEvent,
        selectedEvent,
        setSelectedEvent,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
