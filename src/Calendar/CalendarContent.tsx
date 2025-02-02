import { format, isSameDay } from 'date-fns';
import React from 'react';
import usersData from '../../mock/User.json';
import shiftData from '../../mock/Shift.json';

type CalendarContentProps = {
  weekDays: Date[];
};

type User = {
  id: string;
  name: string;
  role: string;
};

type Shift = {
  id: string;
  date: Date;
  startTime: string;
  endTime: string;
  user: string;
  location: string;
};

const users: User[] = usersData.map((user) => ({
  id: user.id,
  name: user.name,
  role: user.role,
}));

const shifts: Shift[] = shiftData.map((shift) => ({
  id: shift.id,
  date: new Date(shift.date),
  startTime: shift.startTime,
  endTime: shift.endTime,
  user: shift.user,
  location: shift.location,
}));

const CalendarContent: React.FC<CalendarContentProps> = ({ weekDays }) => {
  return (
    <div className="w-[95%] h-full">
      <div className="flex flex-row w-full h-[7%] items-center text-dark_gray font-semibold">
        <div className="w-[16%] border-b-2 border-white h-full"></div>
        {weekDays.map((day) => (
          <div
            key={day.getTime()}
            className="w-[12%] border-s-2 border-b-2 border-white flex justify-center h-full items-center"
          >
            <div>{format(day, 'EEE d')}</div>
          </div>
        ))}
      </div>
      {users.map((user) => (
        <div
          className="border-b-2 border-white flex flex-row h-[7%]"
          key={user.id}
        >
          <div className="flex flex-col text-dark_gray w-[16%]">
            <div className="font-semibold">{user.name}</div>
            <div className="text-sm">{user.role}</div>
          </div>
          {weekDays.map((day) => {
            const shift = shifts.find(
              (shift) => isSameDay(shift.date, day) && shift.user === user.name,
            );
            return (
              <div className="w-[12%] h-full border-s-2 border-white flex items-center justify-center">
                {shift && (
                  <div className="w-[90%] h-[80%] flex flex-row items-center bg-secondary p-2 rounded-lg">
                    <div className="h-[90%] w-[4%] bg-primary rounded-lg"></div>
                    <div className="text-primary rounded-md m-3 font-semibold">
                      <div className="text-sm">
                        {shift?.startTime} - {shift?.endTime}
                      </div>
                      <div className="text-xs">{shift?.location}</div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default CalendarContent;
