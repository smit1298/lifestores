import React, { Fragment, useState, useContext } from "react";
import { UserContext, UserDispatchContext } from "../shopping/ShoppingProvider";
import { Icon } from "@iconify/react";
import SummaryCart from "../shopping/SummaryCart";
import bxCart from "@iconify-icons/bx/bx-cart";
import cartplus from "@iconify-icons/bi/plus-square-fill";
import cartdash from "@iconify-icons/bi/dash-square-fill";
import trash from "@iconify-icons/bi/trash";
import "./DrugItem.css";
import "bootstrap/dist/css/bootstrap.min.css";

const DrugItem = ({ card }) => {
  const { cartData } = useContext(UserContext);
  const { setCartData } = useContext(UserDispatchContext);
  const [cartPopUP, setCartPopUp] = useState(false);
  const [cart, setCart] = useState(cartData);

  const [selectedCartItem, setselectedCartItem] = useState(null);

  const handleIncrement = () => {
    const ItemInCart = (item) => item.ItemId === card.id;
    const cartIndex = cart.findIndex(ItemInCart);
    if (cartIndex == 0 || cartIndex) {
      const cartItem = cart[cartIndex];
      cartItem.quantity++;
      cart[cartIndex] = cartItem;
      setCart(cart);
      setselectedCartItem((item) => {
        return { ...item, quantity: cartItem.quantity };
      });
      setCartData(cart);
    }
  };


  const handleDecrement = () => {
    const itemInCart = (item) => item.ItemId === card.id;
    const cartIndex = cart.findIndex(itemInCart);
    if (cartIndex === 0 || cartIndex) {
      const cartItem = cart[cartIndex];
      if (cartItem.quantity >= 2) {
        const cartItem = cart[cartIndex];
        cartItem.quantity--;
        cart[cartIndex] = cartItem;
        setCart(cart);
        setselectedCartItem((item) => {
          return { ...item, quantity: cartItem.quantity };
        });
        setCartData(cart);
      }
    }
  };



  const handleDelete = () => {
    const newCartArr = cart.filter((item) => item.ItemId !== card.id);
    setselectedCartItem(null);
    setCart(newCartArr);
    setCartData(newCartArr);
    setCartPopUp(false);
  };


  const addToCart = () => {
    let cartItem = cart.find((item) => item.ItemId == card.id);
    console.log(cartItem);
    if (!cartItem) {
      cartItem = {
        ItemId: card.id,
        Price: card.price,
        quantity: 1
      };
      const cartArr = cart == null ? [] : cart;
      cartArr.push(cartItem);
      setCart(cartArr);
      setCartData(cartArr);
      setselectedCartItem((item) => cartItem);
    }
    setCartPopUp(!cartPopUP);
  };


  return (
    <Fragment>
      <div className="col-lg-3 drugs col-md-6 mt-5 ml-5 mr-5">
        <div className="card-deck ">
          <div className="card">
            <SummaryCart trigger={cartPopUP} setTrigger={setCartPopUp}>
              <div className="shop-form">
                <br />
                <label htmlFor="items">
                  <h5 className="shop-para">Items in cart</h5>
                </label>
                &nbsp;
                <input
                  className="shop-input"
                  type="text"
                  value={!selectedCartItem ? 0 : selectedCartItem.quantity}
                />
                <br /> <br />
                <div className="d-flex justify-content-around">
                  <Icon
                    onClick={handleDelete}
                    icon={trash}
                    color="#e7be76"
                    width={40}
                  />

                  <Icon
                    onClick={handleDecrement}
                    icon={cartdash}
                    color="#e7be76"
                    width={40}
                  />

                  <Icon
                    onClick={handleIncrement}
                    icon={cartplus}
                    color="#e7be76"
                    width={40}
                  />
                </div>
              </div>
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
                <a onClick={() => addToCart()}>
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
