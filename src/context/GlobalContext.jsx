import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useLoading = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
  };

  return (
    <GlobalContext.Provider value={{ loading, startLoading, stopLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};

