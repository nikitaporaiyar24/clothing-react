import React from 'react'
import videofile from "../assets/model.mp4"

export default function VideoBanner(){
    return(
        <>
        <div className='video_container'>
            <div className='video_text'>Feel the HYPE</div>
            <div className='video-card'>
            <video autoPlay muted loop>
          <source src={videofile} type="video/mp4" />
        </video>
            </div>
        </div>
        </>
    );
}