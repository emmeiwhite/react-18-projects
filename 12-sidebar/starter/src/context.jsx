import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Let's define all our state values and handlers

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sidebar Toggler

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  // Modal Togglers
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        closeModal,
        closeSidebar,
        openModal,
        openSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Global custom hook : Now instead of using useContext() in the child components, we simply make use of useGlobalContext and destructure the values directly!

export const useGlobalContext = () => {
  return useContext(AppContext);
};
