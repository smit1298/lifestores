import React, { createContext, useState } from "react";
import { drug, cart } from "../data";

// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function ShoppingProvider({ children }) {
  const [shoppingData, setShoppingData] = useState(drug);
  const [cartData, setCartData] = useState(cart);

  return (
    <UserContext.Provider value={{ shoppingData, cartData }}>
      <UserDispatchContext.Provider value={{ setShoppingData, setCartData }}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export { ShoppingProvider, UserContext, UserDispatchContext };
