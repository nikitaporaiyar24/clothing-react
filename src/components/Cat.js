import React from 'react'
import img1 from '../assets/Hoodie.png'
import img2 from '../assets/Long.png'
import img3 from '../assets/Tee.png'
import img4 from '../assets/Over.png'
import "../styles/Cat.css"



export default function Cat(){
    return(
        <>
            <br/>
            <div className='header'>
                <div className='title'>
                    <center><h1>Category</h1></center>
                </div>
                <br/>
                <div className='main-cat'>
                    <div className='image1 '>
                        <img src={img1} class="img-thumbnail" alt="Hoodie"/>
                        <img src={img2} class="img-thumbnail" alt="Long sleeves"/>
                    </div>
                    <br/>
                    <div className='image2'>
                        <img src={img3} class="img-thumbnail" alt="Regular tees"/>
                        <img src={img4} class="img-thumbnail" alt="Over sized t-shirt"/>
                    </div>
                </div>
            </div>
        </>
    );
}