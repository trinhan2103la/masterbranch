import React, { useContext } from 'react';
import dayjs from 'dayjs';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Month from './Month';
import CreateEventButton from './CreateEventButton';
import GlobalContext from '../context/GlobalContext';

const Calendar = ({ month }) => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <div className=" bg-white rounded-md">
      <header className="px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <button
            onClick={handleReset}
            className="border-2 border-dark-blue text-dark-blue rounded-xl font-semibold py-2 px-4 mr-5"
          >
            Today
          </button>
          <div className="flex gap-5">
            <button onClick={handlePrevMonth}>
              <span className="cursor-pointer text-dark-blue mx-2">
                {' '}
                <ChevronLeft />
              </span>
            </button>
            <button onClick={handleNextMonth}>
              <span className="cursor-pointer text-dark-blue mx-2">
                {' '}
                <ChevronRight />
              </span>
            </button>
          </div>
          <p className="text-xl font-extrabold text-center text-dark-blue ml-3">
            {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
          </p>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <div>
            <CreateEventButton />
          </div>
          <select className="border rounded-3xl p-2 bg-dark-blue text-white">
            <option value="month">Month</option>
            <option value="week">Week</option>
            <option value="day">Day</option>
          </select>
        </div>
      </header>
      <Month month={month} />
    </div>
  );
};

export default Calendar;
