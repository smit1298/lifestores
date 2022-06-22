import React from "react";
import "./SummaryCart.css";

const SummaryCart = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="poup-inner">
        <button onClick={() => props.setTrigger(false)} className="close-btn">
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default SummaryCart;
