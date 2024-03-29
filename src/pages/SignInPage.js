import React from 'react'
import Navbar from '../components/Navbar';
import Signin from '../components/Signin';
import Footer from '../components/Footer'


export default function SignInPage(){
    return(
        <>
            <Navbar />
            <Signin />
            <Footer />
        </>
    );
}