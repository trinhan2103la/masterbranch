import React, { useContext, useEffect } from 'react';
import dayjs from 'dayjs';
import GlobalContext from '../context/GlobalContext';

const Labels = () => {
  const { savedEvents } = useContext(GlobalContext);
  const currentDate = dayjs().format(' MMMM D');
  useEffect(() => {
    console.log('Saved Events:', savedEvents); // 📌 Kiểm tra dữ liệu
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  }, [savedEvents]);
  return (
    <div className="border-t-4 border-calendar-tile pt-3 px-5">
      <div>
        <div className="flex justify-between">
          <p className="text-dark-blue font-extrabold text-2xl">
            Upcoming Event
          </p>
          <p className="bg-dark-blue rounded-3xl px-4 py-2 font-extralight text-white">
            View All
          </p>
        </div>
        <p className="text-gray-500 mt-2">Today, {currentDate}</p>
      </div>
      <div>
        {savedEvents.map((evt, idx) => (
          <div
            key={idx}
            className={`${evt.label} rounded-lg mt-3 border-l-8 border-dark-orange h-[100px] px-4 py-2`}
          >
            <p className="text-white">{evt.title}</p>
            <p className="text-light-orange">{evt.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Labels;
