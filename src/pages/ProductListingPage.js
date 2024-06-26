import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../styles/ProductListingPage.css";


export default function ProductListingPage(props) {
  return (
    <div>
      <Navbar />
      
      <center><h1>{props.category}</h1></center>

      <div className='CardContainer'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>


      <Footer />
    </div>
  )
}
