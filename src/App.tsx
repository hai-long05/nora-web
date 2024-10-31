import Sidebar from './Sidebar';
import Headerbar from './Header';
import FilterBar from './FilterBar';

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-row">
      <Sidebar />
      <div className="w-full h-screen">
        <Headerbar />
        <FilterBar />
      </div>
    </div>
  );
};

export default App;
