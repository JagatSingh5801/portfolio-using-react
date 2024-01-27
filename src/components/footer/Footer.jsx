import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer_container container">
        <h1 className="footer_title">Bharat Singh</h1>

        <ul className="footer_list">
            <li>
                <a href="#about" className="footer_link">About</a>
            </li>

            <li>
                <a href="#portfolio" className="footer_link">Projects</a>
            </li>

            <li>
                <a href="#testimonials" className="footer_link">Testimonials</a>
            </li>
        </ul>

        <div className="footer_social">
        <a href="https://www.facebook.com/" className="footer_social-link" target="">
        <i className='bx bxl-facebook' ></i>
    </a>

    <a href="https://www.instagram.com/" className="footer_social-link" target="">
    <i className='bx bxl-instagram' ></i>
    </a>

    <a href="https://www.twitter.com/" className="footer_social-link" target="">
    <i className='bx bxl-twitter' ></i>
    </a>
        </div>
        <span className="footer_copy">
            &#169; Crypticalcoder.All rights reserved</span>
    </div>
   </footer> 
  )
}

export default Footer
