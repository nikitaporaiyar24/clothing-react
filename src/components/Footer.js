import React from 'react'
import '../styles/Footer.css'

export default function Footer(){
    return(
        <>
            <div className="container">
                <div className="aboutus">
                    <h6 className="footer-heading">About Us</h6>
                    <pre className="text-about">
                        Discover <b>HYPE</b>, your go-to destination for <br />
                        cutting-edge streetwear. Embrace the vibrant<br />
                        spirit of urban culture with our curated<br />
                        collections, featuring bold designs,<br />
                        contemporary silhouettes, and premium quality.<br />
                        Express your unique style and join our inclusive<br />
                        community of fashion enthusiasts.
                    </pre>
                </div>
                <div className="categories">
                    <h6 className="footer-heading">Categories</h6>
                    <ul className="footer-links">
                        <li>
                            <a className="content-footer" href="/">&gt; Anime</a>
                        </li>
                        <li>
                            <a className="content-footer" href="/">&gt; Aesthetic</a>
                        </li>
                        <li>
                            <a className="content-footer" href="/">&gt; Vintage</a>
                        </li>
                        <li>
                            <a className="content-footer" href="/">&gt; Series</a>
                        </li>
                    </ul>
                </div>
                <div className="column-for-content">
                    <h6 className="footer-heading">CUSTOMER POLICIES</h6>
                    <ul className="footer-links">
                        <li>
                            <a className="content-icon-footer" href="/">&gt; Contact us</a>
                        </li>
                        <li>
                            <a className="content-icon-footer" href="/">&gt; FAQ</a>
                        </li>
                        <li>
                            <a className="content-icon-footer" href="/">&gt; T&C</a>
                        </li>
                        <li>
                            <a className="content-icon-footer" href="/">&gt; Track Orders</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="footer-lining"/>
            <div className="footer-end"> 
                <div className="footer-logo">HYPE</div>
            </div>
        </>
    );
}