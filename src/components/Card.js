import React from 'react'
import men_p1 from '../assets/men_p1.png'



export default function Card(props) {
  return (
      <div className='container1'>
                <div className='col'> 
                    <div className='image'>
                        <center><img src={men_p1} alt="..." /></center>
                    </div>
                    <div className='product-title'>
                        <center><b>{props.name?props.name:"White shirt"}</b></center>
                        <br />
                        Rs.{props.price?props.price:1200}
                    </div>
                    
                </div>
        </div>
  );
}
