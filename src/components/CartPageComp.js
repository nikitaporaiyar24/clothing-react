import React from 'react'
import HypeCart from './HypeCart'
import PaymentPortal from './PaymentPortal'

export default function CartPageComp() {
  return (
    <div>
      <div className='cart-page'>
        <div id='items'><HypeCart/></div>
        <div id='payment'><PaymentPortal/></div>
    </div>
    </div>
  )
}
