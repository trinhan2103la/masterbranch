import React from 'react';
import SmallCalendar from './SmallCalendar';
import Labels from './Labels';

const Sidebar = () => {
  return (
    <div className="bg-white min-w-[350px]">
      <SmallCalendar />
      <Labels />
    </div>
  );
};

export default Sidebar;
