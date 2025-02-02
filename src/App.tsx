import Content from './Content';
import Header from './Header';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-row">
      <Sidebar />
      <div className="w-full h-full">
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default App;
