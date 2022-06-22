import React, { Fragment, useState, useContext } from "react";
import { UserContext, UserDispatchContext } from "../shopping/ShoppingProvider";
import { Icon } from "@iconify/react";
import SummaryCart from "../shopping/SummaryCart";
import bxCart from "@iconify-icons/bx/bx-cart";
import "./DrugItem.css";
import "bootstrap/dist/css/bootstrap.min.css";

const DrugItem = ({ card }) => {
  const [cartPopUP, setCartPopUp] = useState(false);
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => {
      if (prev === 0) return prev;
      return prev - 1;
    });
  };

  const handleDelete = () => {
    setCount(0);
  };

  const userDetails = useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);
  console.log(userDetails);
  return (
    <Fragment>
      <div className="col-lg-3 drugs col-md-6 mt-5 ml-5 mr-5">
        <div className="card-deck ">
          <div className="card">
            <SummaryCart trigger={cartPopUP} setTrigger={setCartPopUp}>
              <div>
                <br />
                <input className="shop-input" type="text" value={count} />
                <br /> <br />
                <button className="shop-btn" onClick={handleIncrement}>
                  Increment
                </button>
                <br /> <br />
                <button className="shop-btn" onClick={handleDecrement}>
                  Decrement
                </button>
                <br /> <br />
                <button className="shop-btn" onClick={handleDelete}>
                  Delete
                </button>
                <br /> <br />
              </div>
              {/* <div clayssName="overlay"></div> */}
            </SummaryCart>

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
                <a onClick={() => setCartPopUp(true)}>
                  <Icon className="icon" icon={bxCart} color="white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DrugItem;
