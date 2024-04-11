import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [listView, setListView] = useState(false);

  const toggleView = () => {
    setListView(!listView);
  };

  return (
    <AppContext.Provider value={{ listView, toggleView }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
