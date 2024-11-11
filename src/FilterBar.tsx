import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faPlus,
  faSliders,
  faPrint,
  faMagnifyingGlassPlus,
} from '@fortawesome/free-solid-svg-icons';

const FilterBar = () => {
  return (
    <div className="flex flex-row h-[7%] justify-between items-center px-8 border-b-8">
      <div className="flex flex-row text-gray-500">
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
        <h1 className="flex items-center ml-4 font-semibold text-lg text-gray-700">
          This Week
        </h1>
      </div>
      <div className="flex flex-row space-x-6 font-light text-gray-500">
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
        <button className="space-x-2">
          <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
          <span>Woche suchen</span>
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
