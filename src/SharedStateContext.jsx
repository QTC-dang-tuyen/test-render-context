import React, { createContext, useState } from 'react';

export const SharedStateContext = createContext();

export const SharedStateProvider = ({ children }) => {
  const [sharedValue, setSharedValue] = useState('Initial Value');
  const [secondValue, setSecondValue] = useState('Second Value');

  return (
    <SharedStateContext.Provider value={{ sharedValue, setSharedValue, secondValue, setSecondValue }}>
      {children}
    </SharedStateContext.Provider>
  );
};
