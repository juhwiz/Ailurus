import React, { createContext } from 'react';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const baseURL = 'https://5653-2804-3c74-3f0-3d20-28bc-da8b-19a8-5269.ngrok-free.app';

  return (
    <ApiContext.Provider value={{ baseURL }}>
      {children}
    </ApiContext.Provider>
  );
};
