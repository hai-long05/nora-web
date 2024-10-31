import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faPlus,
  faSliders,
  faPrint,
} from '@fortawesome/free-solid-svg-icons';

const FilterBar = () => {
  return (
    <div className="flex flex-row h-[6%] justify-between items-center px-6 border-b-8">
      <div className="flex flex-row">
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="border rounded-s-md p-3 w-4 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faAngleRight}
          className="border rounded-e-md p-3 w-4 cursor-pointer"
        />
        <button className="border rounded-md p-3 h-[42px] flex items-center ml-4 font-medium">
          Today
        </button>
        <h1 className="flex items-center ml-4 font-semibold text-lg">
          This Week
        </h1>
      </div>
      <div className="flex flex-row space-x-6">
        <button className="space-x-2">
          <FontAwesomeIcon icon={faPlus} />
          <span>Gruppe erstellen</span>
        </button>
        <button className="space-x-2">
          <FontAwesomeIcon icon={faSliders} />
          <span>Filter</span>
        </button>
        <button className="space-x-2">
          <FontAwesomeIcon icon={faPrint} />
          <span>Drucken</span>
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
