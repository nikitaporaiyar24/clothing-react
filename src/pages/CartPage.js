import React from 'react'
import Footer from '../components/Footer'
import CartPageComp from '../components/CartPageComp'
import Navbar from '../components/Navbar'
import "../styles/CartPage.css";

export default function CartPage() {
  return (
    <div>
       <>
    <Navbar/>
    <CartPageComp />
      <Footer/>
    </>
    </div>
  )
}
