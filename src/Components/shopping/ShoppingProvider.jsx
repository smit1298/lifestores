import React, { createContext, useState } from "react";
import data from '../data';

// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function ShoppingProvider({ children }) {
  const [shoppingData, setShoppingData] = useState(data);

  return (
    <UserContext.Provider value={shoppingData}>
      <UserDispatchContext.Provider value={setShoppingData}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export  { ShoppingProvider, UserContext, UserDispatchContext };
