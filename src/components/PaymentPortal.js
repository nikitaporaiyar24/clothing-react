import React from 'react'
import '../styles/PaymentPortal.css'
import cod from '../assets/cash-on-delivery 1.png'
import rupay from '../assets/rupay 1.png'
import visa from '../assets/visa 1.png'
import gpay from '../assets/google-pay 1.png'
import razorpay from '../assets/razorpaypng 1.png'
import mastercard from '../assets/mastercard 1.png'
import { Link } from 'react-router-dom'








export default function PaymentPortal() {
  return (
    <div>
        {/* Outer portion of the payment div */}
        <div className="payment_div">
                <div className="discount_div">
                    <div><p>Discounts</p></div>
                    <div><p>Apply discount</p></div>
                </div>

                {/* Holds login button */}
                <div className="login_div">
                    <div><button><b>Login</b></button></div>
                </div>

                {/* Holds the order statement*/}
                <div className="order_div">
                    <div className="order_val_div">
                        <div className='order_value'><p> Order Value</p></div>
                        <div className='order_price'><p>$22</p></div>
                    </div>

                    {/* delivery and money */}
                    <div className='delivery_division'>
                        <div><p> Delivery</p></div>
                        <div className='order_price'><p>$22</p></div>
                    </div>

                    <div><hr /></div> 
                    
                    <div className="total_div">
                        <div><b>Total</b></div>
                        <div><b>$44</b></div>
                    </div>
                </div>

                {/* Holds the checkout button */}
                <div className="checkout_div">
                    <div><Link to='/cart'><p>Continue to checkout</p></Link></div>
                </div>

                {/* Holds the payment header and icons */}
                <div className="payment_opt_div">
                    {/* Holds the WE ACCEPT heading */}
                    <div className="payment_heading_div">
                        <p>We Accept</p>
                    </div>

                    {/* Holds the icons of payments */}
                    <div className="payment_icons_div">
                        <div><img id='cod-icon' src={cod} alt="cash-on-delivery" /></div>
                        <div><img id='rupay-icon' src={rupay} alt="rupay" /></div>
                        <div><img id='visa-icon' src={visa} alt="visa" /></div>
                        <div><img id='gpay-icon' src={gpay} alt="google-pay" /></div>
                        <div><img id='razor-icon' src={razorpay} alt="razorpaypng" /></div>
                        <div><img id='master-icon' src={mastercard} alt="mastercard" /></div>
                    </div>
                </div>
            </div>
    </div>
  )
}
