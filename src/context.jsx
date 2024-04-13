import { createContext, useContext, useState } from 'react';
import { useFetchProjects } from './fetchProjects';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [listView, setListView] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const { projects } = useFetchProjects();

  const filterModalData = (id) => {
    const data = projects.find((item) => item.id === id);
    setModalData(data);
  };

  const toggleView = () => {
    setListView(!listView);
  };

  const openModal = (id) => {
    filterModalData(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        listView,
        toggleView,
        isModalOpen,
        openModal,
        closeModal,
        modalData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
