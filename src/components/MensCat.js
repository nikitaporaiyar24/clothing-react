import React from 'react'
import men_p1 from '../assets/men_p1.png'
import men_p2 from'../assets/men_p2.png'
import men_p3 from '../assets/men_p3.png'
import men_p4 from '../assets/men_p4.png'
// import men_p5 from '../assets/men_p5.png'
// import men_p6 from '../assets/men_p6.png'
// import men_p7 from '../assets/men_p7.png'
// import men_p8 from '../assets/men_p8.png'
// import men_p9 from '../assets/men_p9.png'
// import men_p10 from '../assets/men_p10.png'
import '../styles/MensCat.css'
import Card from './Card'
import { useEffect } from 'react'



export default function MensCat(){

        // Runs before loading the components!
        useEffect(()=>{

        }, [])
    
    return(
        <>

        <div className='CardContainer'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        
            
                
        </>
    );
}