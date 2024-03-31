import React from 'react'
import menmodle from "../assets/men-model.jpg"
import womenmodel from "../assets/women-model.jpg"
import "../styles/GenderStore.css"


export default function GenderStore() {
    return (
        <>
        <br/>
        <div className='gender_store'>   
            <div className='mens'>
                <div className='image'>
                    <img src={menmodle} className="img-thumbnail" alt="menmodle"/>
                    
                </div>
                <div>
                <center><button type="button" className="btn-gender">Shop Mens</button></center>
                </div>
            </div>
            <div className='womens'>
                <div className='image'>
                    <img src={womenmodel} className="img-thumbnail" alt="womenmodel"/>
                </div>
                <div>
                    <center><button type="button" className="btn-gender">Shop Womens</button></center>
                </div>
            </div>
        </div>
        
        </>
    );
}
