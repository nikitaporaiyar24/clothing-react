import React from 'react'
import image from '../assets/banner.png'
import "../styles/Banner.css"


export default function Banner(){
    return(
        <>
        <div className='BannerRoot'>
            <img src={image} alt="bannerimage" />
        </div>
        </>
    )
};