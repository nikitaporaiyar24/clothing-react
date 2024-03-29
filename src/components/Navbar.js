import React from 'react'
import logo from '../assets/HYPE.png'
import searchicon from '../assets/search.png'
import carticon from '../assets/cart.png'
import usericon from '../assets/user.png'
import '../styles/Navbar.css'


export default function Navbar(){
    return(
        <>
            <div className="navbar">
                <div className='category-btn'>
                    <button type="button" className="btn">Men</button>
                    <button type="button" className="btn">Women</button>
                </div>
                <div className="logo">
                        <img src={logo} alt="HYPE" />
                </div>
                <div className="icons">
                        <img src={searchicon} alt="Search" className="btn" />
                        <img src={carticon} alt="Cart" className="btn" />
                        <img src={usericon} alt="signin" className="btn" />
                </div>
            </div>
        </>
    );
    
}
