import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
  return (
    <div className="h-[6%] w-full bg-bg_white flex items-center justify-between px-6">
      <h1 className="text-dark_gray font-bold text-lg">Dienstplan</h1>
      <div className="text-primary flex flex-row bg-secondary px-4 py-2 rounded-md items-center cursor-pointer">
        <FontAwesomeIcon icon={faCalendarPlus} size="lg" />
        <h1 className="pl-2 font-semibold">NEUER DIENST</h1>
      </div>
    </div>
  );
};

export default Header;
