import React from 'react';

import Day from './Day';

const Month = ({ month }) => {
  return (
    <div className="flex flex-col flex-1 ">
      {/* Hàng tiêu đề ngày */}
      <div className="grid grid-cols-7 h-10">
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day, index) => (
          <div
            key={index}
            className="text-center font-bold flex items-center justify-center text-gray-400"
          >
            {day}
          </div>
        ))}
      </div>
      {/* Bảng ngày tháng */}
      <div className="min-h-[500px] flex-1 grid grid-cols-7 grid-rows-5">
        {month.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((day, idx) => (
              <Day day={day} key={idx} rowIdx={index} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Month;
