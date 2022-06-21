import React, { Fragment } from "react";
import DrugList from "./Components/drugList/DrugList";
import NavHead from "./Components/navbar/Navbar";
import {ShoppingProvider}  from "./Components/shopping/ShoppingProvider";

const App = () => {
  return (
    <Fragment>
      <div className="App">
        <NavHead />
        <ShoppingProvider>
          <DrugList  />
        </ShoppingProvider>
      </div>
    </Fragment>
  );
};

export default App;
