import React, { useContext, useState } from 'react';
import {
  X,
  AlignLeft,
  CalendarCheck,
  ChartNoAxesGantt,
  Bookmark,
  Check,
  Trash,
  Timer,
  Link,
  Link2,
} from 'lucide-react';
import GlobalContext from '../context/GlobalContext';

const labelsClasses = [
  'bg-indigo-500',
  'bg-gray-500',
  'bg-light-blue',
  'bg-dark-blue',
  'bg-light-orange',
  'bg-dark-orange',
  'bg-calendar-tile',
  'bg-red-500',
];

const EventModal = () => {
  const { setShowEventModal, daySelected, dispatchCallEvent, selectedEvent } =
    useContext(GlobalContext);
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : '');
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ''
  );
  const [startTime, setStartTime] = useState(
    selectedEvent ? selectedEvent.startTime : ''
  );
  const [endTime, setEndTime] = useState(
    selectedEvent ? selectedEvent.endTime : ''
  );
  const [url, setUrl] = useState(selectedEvent ? selectedEvent.url : '');

  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      startTime,
      endTime,
      url,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCallEvent({ type: 'update', payload: calendarEvent });
    } else {
      dispatchCallEvent({ type: 'push', payload: calendarEvent });
    }

    setShowEventModal(false);
  }
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-300 px-4 py-2 flex justify-between items-center">
          <span className="text-gray-400">
            <AlignLeft />
          </span>
          <div className="flex gap-2 items-center justify-center">
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCallEvent({ type: 'delete', payload: selectedEvent });
                  setShowEventModal(false);
                }}
                className="text-gray-500 cursor-pointer"
              >
                <Trash />
              </span>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span className="text-gray-500">
                <X />
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
              required
              placeholder="Add Title For Event"
              value={title}
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 foucs:border-blue-500 "
            />
            <span className="text-gray-500">
              <CalendarCheck />
            </span>
            <p>{daySelected.format('dddd,MMMM DD')}</p>
            <span className="text-gray-500">
              <Timer />
            </span>
            <input
              onChange={(e) => setStartTime(e.target.value)}
              type="time"
              name="startTime"
              required
              value={startTime}
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 foucs:border-blue-500 "
            />
            <span className="text-gray-500">
              <Timer />
            </span>
            <input
              onChange={(e) => setEndTime(e.target.value)}
              type="time"
              name="endTime"
              required
              value={endTime}
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 foucs:border-blue-500 "
            />
            <span className="text-gray-500">
              <ChartNoAxesGantt />
            </span>
            <input
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              name="description"
              required
              placeholder="Add Description For Event"
              value={description}
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 foucs:border-blue-500 "
            />
            <span className="text-gray-500">
              <Link />
            </span>
            <input
              onChange={(e) => setUrl(e.target.value)}
              type="text"
              name="url"
              placeholder="Add Event URL"
              value={url}
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 foucs:border-blue-500"
            />

            {url && (
              <>
                <span className="text-gray-500">
                  <Link2 />
                </span>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Open Event Link
                </a>
              </>
            )}
            <span className="text-gray-500">
              <Bookmark />
            </span>
            <div className="flex gap-x-2">
              {labelsClasses.map((lbl, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lbl)}
                  className={`${lbl} w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === lbl && (
                    <span className="text-white text-sm">
                      <Check />
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5 ">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-gray-500 hover:bg-blue-500 px-6 py-2 rounded-sm text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};

export default EventModal;
