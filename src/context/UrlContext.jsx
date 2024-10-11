import React, { createContext } from "react";

export const URLContext = createContext();

const UrlContext = ({ children }) => {
  const url = "https://cyan-hamster-479122.hostingersite.com/";
  return (
    <>
      <URLContext.Provider value={url}>{children}</URLContext.Provider>
    </>
  );
};

export default UrlContext;
