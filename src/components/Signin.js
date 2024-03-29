import React from 'react'
import SignIn from '../styles/SignIn.css'

export default function Signin(){
    return(
        <>
            <div className="outer-container">
                <div className="signin">Sign in</div>
                <div className="emaildes">
                    <div className="email">Email *</div>
                    <input type="email" name="email" id="emailbox" />
                </div>
                <div className="passdes">
                    <div className="password">Password *</div>
                    <input type="password" name="password" id="passwordbox" />
                </div>
                <div className="remme">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <div className="rem">Remember me</div>
                </div>
                <input type="button" value="Submit" id="sign" color="white" />

            </div>
        </>
    );
}