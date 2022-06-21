import React, { Fragment, useContext } from "react";
import { UserContext, UserDispatchContext } from "../shopping/ShoppingProvider";
import { Icon } from "@iconify/react";
import bxPlus from "@iconify-icons/bx/bx-plus";
import "./DrugItem.css";
import "bootstrap/dist/css/bootstrap.min.css";

const DrugItem = ({ card }) => {
  const userDetails = useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);
  console.log(userDetails);
  return (
    <Fragment>
      <div className="col-lg-4 drugs  col-md-6 mt-5 ml-5 mr-5">
        <div className="card-deck ">
          <div className="card">
            <img
              className=" card-img-top"
              src={card.image}
              alt="drug at your door step"
            />
            <div className="card-body ">
              <span className="float">
                <h4 className="card-title float-left">{card.name}</h4>
                <h4 className="price float-right">&#8358;{card.price}</h4>
              </span>
              <p className="card-subtitle float-left mt-4 pt-2">{card.sku}</p>
            </div>

            <div className="card-text h-20 mb-4">
              <p>{card.description}</p>
            </div>

            <div style={{ display: "flex", justifyContent: "end" }}>
              <div className="plus">
                <Icon className="icon" icon={bxPlus} color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DrugItem;
