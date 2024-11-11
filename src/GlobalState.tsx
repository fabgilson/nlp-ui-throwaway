import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';

interface GlobalStateType {
  globalState: string;
  setGlobalState: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalStateContext = createContext<GlobalStateType | undefined>(undefined);

interface GlobalStateProviderProps {
  children: ReactNode;
}

const LOCAL_STORAGE_KEY = "globalState";

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
  const getInitialState = (): string => {
    const storedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedState ? JSON.parse(storedState) : "nlp";
  };

  const [globalState, setGlobalState] = useState<string>(getInitialState);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(globalState));
  }, [globalState]);

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = (): GlobalStateType => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
