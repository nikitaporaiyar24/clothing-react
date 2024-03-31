import React from 'react'
import '../styles/HypeCart.css'
import men_p1 from '../assets/men_p1.png'

export default function HypeCart() {
  return (
    <>
    {/* Shopping header div */}
    <div id="shopping-heading">
      <h1>Shopping bag</h1>
    </div>

    {/* Represents Image of card */}
    <div className="item">
      {/* Image of the product */}
      <div className="item-image">
        <img src={men_p1} alt="p1" />
      </div>

      {/* Outer Div of name and price and buttons*/}
      <div className="item-details">
        {/* Holds Item Name and Price and Size and total */}
        <div className="item-heading">
          <h3>Wide pull-on trousers</h3>
        </div>
        <div className="item_price">
          <p>Rs. 2000</p>
        </div>

        {/* Size and price outer div */}
        <div className="size_and_price">
          <div>
            <p>Size: M</p>
          </div>
          <div>
            <p>Total: Rs 2000</p>
          </div>
        </div>

        {/* Outer div of Wishlist button and quantity*/}
        <div className="wish_and_quantity">
          <div>
            <i className="fa-regular fa-heart"></i>
          </div>
          <div>
            <i className="fa-solid fa-angle-down"></i>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
