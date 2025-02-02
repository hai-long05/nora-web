import React, { useState } from 'react';
import CalendarNavigation from './CalendarNavigation';
import { addDays, endOfWeek, startOfWeek } from 'date-fns';
import CalendarContent from './CalendarContent';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const start = startOfWeek(date, { weekStartsOn: 1 });
  const end = endOfWeek(date, { weekStartsOn: 1 });
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(start, i));

  const nextWeek = () => {
    setDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(prev.getDate() + 7);
      return newDate;
    });
  };

  const previousWeek = () => {
    setDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(prev.getDate() - 7);
      return newDate;
    });
  };

  return (
    <div className="w-full h-full flex items-center flex-col ">
      <CalendarNavigation
        nextWeek={nextWeek}
        previousWeek={previousWeek}
        start={start}
        end={end}
      />
      <CalendarContent weekDays={weekDays} />
    </div>
  );
};

export default Calendar;
