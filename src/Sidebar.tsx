import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
  return (
    <div className="h-full w-[5%] bg-bg_white flex items-center pt-4 flex-col">
      <img
        src="../assets/images/tmp_icon.png"
        alt="logo"
        className="scale-150 rounded-full pb-10 pt-5"
      />
      <FontAwesomeIcon
        icon={faCalendarDays}
        size="lg"
        className="text-bg_white bg-primary p-3 rounded-md cursor-pointer"
      />
    </div>
  );
};

export default Sidebar;
