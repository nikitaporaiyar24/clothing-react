import React from 'react'
import logo from '../assets/HYPE.png'
import searchicon from '../assets/search.png'
import carticon from '../assets/cart.png'
import usericon from '../assets/user.png'
// import hearticon from '../assets/heart.png'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'


export default function Navbar(){

    // Cretae a navigate object
    const nav = useNavigate()

    const handleMensRoute = () =>{
        nav('/mens-page')
    }

    const handleWomensRoute = () =>{
        nav('/womens-page')
    }

    const handleSignInRoute = () => {
        nav('/signin')
    }
    return(
        <>
            <div className="navbar">
                <div className='category-btn'>
                    <button type="button" className="btn" onClick={handleMensRoute}>Men</button>
                    <button type="button" className="btn" onClick={handleWomensRoute}>Women</button>
                </div>
                <div className="logo">
                        <img src={logo} alt="HYPE" onClick={() => nav('/')} />
                </div>
                <div className="icons">
                        <h3 onClick={() => nav('/wishlist')}>❤️</h3>
                        <img src={searchicon} alt="Search" className="btn" />
                        <img src={carticon} alt="Cart" className="btn" onClick={() => {nav('/cart')}} />
                        <img src={usericon} alt="signin" onClick={handleSignInRoute} className="btn" />
                </div>
            </div>
        </>
    );
    
}
