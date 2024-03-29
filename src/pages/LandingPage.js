import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import GenderStore from '../components/GenderStore'
import Cat from '../components/Cat'
import VideoBanner from '../components/VideoBanner'

export default function LandingPage() {
    return (
        <div>
            <Navbar />
            <Banner />
            <GenderStore />
            <Cat />
            <VideoBanner />
        </div>
    )
}
