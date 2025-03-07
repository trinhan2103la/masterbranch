import React, { useContext, useEffect, useState } from 'react';
import getMonth from './util';

import Sidebar from './components/Sidebar';
import Calendar from './components/Calendar';
import GlobalContext from './context/GlobalContext';
import EventModal from './components/EventModal';

const App = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div className="h-screen flex gap-5 bg-calendar-tile px-10 pt-5">
        <Sidebar />
        <Calendar month={currentMonth} />
      </div>
    </React.Fragment>
  );
};

export default App;
