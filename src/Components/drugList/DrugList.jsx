import React, { useEffect, useState } from "react";
import { Offline } from "react-detect-offline";
import Spinner from "react-bootstrap/Spinner";
import DrugItem from "../drugItem/DrugItem";
import "./DrugList.css";
import drug from "../data";

const DrugList = () => {
  const [drugItem, setDrugItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offline, setOffline] = useState(true);

  useEffect(() => {
    
    setDrugItem(drug.data);
        setLoading(false);
        setOffline(false);
    
  }, []);

  if (loading || offline) {
    if (loading) {
      return (
        <div className="container">
          <div className="row">
            <Spinner
              className="spin"
              animation="border"
              role="status"
            ></Spinner>
          </div>
        </div>
      );
    }
    if (offline) {
      return (
        <Offline>
          <h2 className="offline">
            You're offline right now. Check your connection and reload the
            foodlist page.
          </h2>
        </Offline>
      );
    }
  }

  return (
    <div className="container">
      <div className="row">
        {drugItem.map((item, index) =>
          index < 6 ? <DrugItem key={item.id} card={item} /> : ""
        )}
        
      </div>

      <div className="row">
        
      </div>
    </div>
  );
};

export default DrugList;
