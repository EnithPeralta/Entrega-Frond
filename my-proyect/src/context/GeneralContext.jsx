import React, { createContext, useState } from "react";

const initialState = {
  seleccion: 5, 
};

export const GeneralContext = createContext(initialState);

export const GeneralContextProvider = ({ children }) => {
  const [seleccion, setSeleccion] = useState(initialState.seleccion);

  const value = {
    seleccion,
    setSeleccion,
  };

  return (
    <GeneralContext.Provider value={value}>
      {children}
    </GeneralContext.Provider>
  );
};
