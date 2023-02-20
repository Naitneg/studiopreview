import React, { useState } from "react";

export const LoadingContext = React.createContext({
  isLoading: false,
  loadingHandler: () => {},
});

const LoadingContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const loadingHandler = (vlera) => {
    setIsLoading(vlera);
  };
  const value = { isLoading, loadingHandler };
  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};

export default LoadingContextProvider;
