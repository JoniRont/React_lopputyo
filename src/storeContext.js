import React, { createContext, useState } from "react";

const StoreContext = createContext([[],() => {}]);
const StoreProvider = ({ children }) => {
  const [state, setState] = useState({
    items: [children]
  });
  return (
    <StoreContext.Provider value={[state, setState]}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
