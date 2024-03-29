import React from 'react'
import videofile from "../assets/model.mp4"
import '../styles/VideoBanner.css'

export default function VideoBanner(){
    return(
        <>
        <br/>
        <div className='video_container'>
            <div className='video_text'><h2>Feel the HYPE</h2></div>
            <div className='video-card'>
            <video autoPlay muted loop>
                <source src={videofile} type="video/mp4" />
            </video>
            </div>
        </div>
        </>
    );
}