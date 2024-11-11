import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Headerbar = () => {
  return (
    <div className="flex justify-between px-6 border-b items-center h-[6%]">
      <h1 className="font-bold text-lg">Dienstplan</h1>
      <div className="flex flex-row">
        <button className="bg-white text-secondary h-9 px-4 mr-4 rounded-md flex items-center border-secondary border-[1px]">
          <FontAwesomeIcon icon={faFile} className="text-secondary" />
          <span className="pl-3">Woche Drucken</span>
        </button>
        <button className="bg-secondary text-white h-9 px-4 rounded-md flex items-center">
          <FontAwesomeIcon icon={faPlus} />
          <span className="pl-3">Erstellen</span>
        </button>
      </div>
    </div>
  );
};

export default Headerbar;
