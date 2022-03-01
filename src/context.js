import React, { useState, useEffect, useContext } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="hey">{children}</AppContext.Provider>;
};

export const useGlobalContext = () => useContext(AppContext);
export { AppContext, AppProvider };
