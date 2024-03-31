import React from 'react'
import '../styles/MensCat.css'
import Card from './Card'
import { useEffect } from 'react'

// import men_p1 from '../assets/men_p1.png'



export default function MensCat(props){

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