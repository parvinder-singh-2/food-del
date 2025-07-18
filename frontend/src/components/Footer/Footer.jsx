import React from 'react'
import "./Footer.css"
import {assets} from "../../assets/assets"

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
           <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum praesentium, animi illo quas consequatur sint officia commodi veniam, porro provident temporibus laudantium ipsam!</p>
                <div className="footer-social-icons">
                <img src= {assets.facebook_icon} alt="" />
                <img src= {assets.linkedin_icon} alt="" />
                <img src= {assets.twitter_icon} alt="" />  
                </div>
           </div>
           <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                  <li>Home</li>
                  <li>About US</li>
                  <li>Delivery</li>
                  <li>Privacy Policy</li>
                </ul>
           </div>
           <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+1-212-456-7890</li>
                <li>contact@tamato.com</li>
              </ul>
           </div>
        </div>
        <hr />
        <p className="footer-copywright">Copywright 2024 @ Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer