import React, { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import GlobalContext from '../context/GlobalContext';
import { Link2 } from 'lucide-react';

const Labels = () => {
  const { savedEvents } = useContext(GlobalContext);
  const [showAll, setShowAll] = useState(false);
  const currentDate = dayjs().format('MMMM D');

  useEffect(() => {
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  }, [savedEvents]);

  // Chỉ hiển thị tối đa 3 sự kiện khi chưa bấm "View All"
  const eventsToShow = showAll ? savedEvents : savedEvents.slice(0, 3);

  return (
    <div className="border-t-4 border-calendar-tile pt-3 px-5">
      <div className="sticky">
        <div className="flex justify-between">
          <p className="text-dark-blue font-extrabold text-2xl">
            Upcoming Event
          </p>
          {savedEvents.length > 3 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-dark-blue rounded-3xl px-4 py-2 font-extralight text-white"
            >
              {showAll ? 'Show Less' : 'View All'}
            </button>
          )}
        </div>
        <p className="text-gray-500 mt-2">Today, {currentDate}</p>
      </div>
      <div>
        {eventsToShow.map((evt, idx) => (
          <div
            key={idx}
            className={`${evt.label} rounded-lg mt-3 border-l-8 border-dark-orange h-[100px] px-4 py-2`}
          >
            <p className="text-white">{evt.title}</p>
            <p className="underline text-blue-300">
              <small>
                Time: {evt.startTime} - {evt.endTime}
              </small>
            </p>
            <p className="text-light-orange">{evt.description}</p>
            {evt.url && (
              <a
                href={evt.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-blue underline flex items-center gap-1"
              >
                <Link2 /> Link
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Labels;
