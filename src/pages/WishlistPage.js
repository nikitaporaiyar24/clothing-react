import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import MiddleHeader from "../components/MiddleHeader"
import "../styles/Wishlistpage.css"


export default function WishlistPage() {
  return (
    <>
        <Navbar></Navbar>
        <MiddleHeader heading="Your Wishlist" description="This is the selection of items liked by you the most"></MiddleHeader>

        <div className='product-card-collection'>
            <div><Card></Card></div>
            <div><Card></Card></div>
            <div><Card></Card></div>
            <div><Card></Card></div>
            <div><Card></Card></div>
            <div><Card></Card></div>
            <div><Card></Card></div>
            <div><Card></Card></div>
            <div><Card></Card></div>
            <div><Card></Card></div>
            
        </div>
        <Footer/>
    </>
  )
}
