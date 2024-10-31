import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="h-full w-[4%] bg-primary flex items-center pt-4 flex-col">
      <img
        className="size-10"
        src="https://cdn2.iconfinder.com/data/icons/time-and-clock-v-3/100/time-12-512.png"
        alt="calendar"
      />
      <div className="pt-4">
        <FontAwesomeIcon
          icon={faBarsStaggered}
          size="lg"
          className="text-white mt-4 bg-primaryHover rounded-md p-4"
        />
      </div>
    </div>
  );
};

export default Sidebar;
