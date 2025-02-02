import React from 'react';
import {
  faCaretLeft,
  faCaretRight,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import { de } from 'date-fns/locale/de';

type CalendarNavigationProps = {
  nextWeek: () => void;
  previousWeek: () => void;
  start: Date;
  end: Date;
};

type NavigationArrowProps = {
  icon: IconDefinition;
  onClick?: () => void;
};

const CalendarNavigation: React.FC<CalendarNavigationProps> = ({
  nextWeek,
  previousWeek,
  start,
  end,
}) => {
  return (
    <div className="bg-bg_white w-[95%] h-[5%] mt-10 rounded-lg flex items-center px-4">
      <NavigationArrow icon={faCaretLeft} onClick={previousWeek} />
      <NavigationArrow icon={faCaretRight} onClick={nextWeek} />
      <div className="text-dark_gray font-semibold pl-5">
        {format(start, 'MMM d', { locale: de })} -
        {format(end, 'MMM d', { locale: de })}
      </div>
    </div>
  );
};

const NavigationArrow: React.FC<NavigationArrowProps> = ({ icon, onClick }) => {
  return (
    <div
      className="bg-bg_gray text-dark_gray w-8 h-8 flex justify-center items-center rounded-md cursor-pointer mx-1"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} size="lg" />
    </div>
  );
};

export default CalendarNavigation;
