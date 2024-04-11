import { BsList, BsFillGridFill } from 'react-icons/bs';
import { useGlobalContext } from './context';

const Topbar = () => {
  const { listView, toggleView } = useGlobalContext();

  return (
    <header className="bg-sky-700 sticky top-0">
      <div className="max-w-6xl py-3 mx-auto flex justify-between ">
        <h1 className="text-3xl font-medium tracking-wide text-white opacity-80">
          Projects Gallery
        </h1>
        <button onClick={toggleView}>
          {listView ? (
            <BsFillGridFill className="topbar-icon" />
          ) : (
            <BsList className="topbar-icon text-2xl" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Topbar;
