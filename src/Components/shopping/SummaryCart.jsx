import React from "react";
import "./SummaryCart.css";
import { Icon } from "@iconify/react";
import cartdelete from "@iconify-icons/bi/x-square-fill";

const SummaryCart = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="poup-inner">
        
        <Icon
          onClick={() => props.setTrigger(false)}
          className="close-btn"
          icon={cartdelete}
        />
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default SummaryCart;
