"use client"

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../../src/app/components/footer.css'

const Footer = () => {
  return (
    <section id="footer" className="footer bg-black mt-8">
      <div className="section__padding">
        <div className="sb__footer">
          <div className="sb__footer-links flex flex-wrap justify-between w-full mb-8">
            <div className="sb__footer-links-div">
              <h4 className="text-white">Ministry</h4>
              <a href=""><p>Children Ministry</p></a>
              <a href=""><p>Youth Ministry</p></a>
              <a href=""><p>Public Compass Ministry</p></a>
              <a href=""><p>Prison and Hospital Ministry</p></a>
            </div>
            <div className="sb__footer-links-div">
              <h4 className="text-white">Get Help</h4>
              <a href=""><p>Pastoral Care</p></a>
              <a href=""><p>Prayer Requests</p></a>
              <a href=""><p>Counselling Services</p></a>
              <a href=""><p>Support Groups</p></a>
            </div>
            <div className="sb__footer-links-div">
              <h4 className="text-white">Partners</h4>
              <a href=""><p>Amazing Truth Discoveries</p></a>
              <a href=""><p>INFINITYDRIP</p></a>
              <a href=""><p>PCM</p></a>
              <a href=""><p>Revock Music</p></a>
            </div>
            <div className="sb__footer-links-div">
              <h4 className="text-white">Resources</h4>
              <a href=""><p>Books and Magazines</p></a>
              <a href=""><p>Prophetic Insights</p></a>
              <a href=""><p>Present Truth</p></a>
            </div>
            <div className="sb__footer-links-div">
              <h4 className="text-white">Social Media</h4>
              <div className="social-media">
                <a href="https://www.facebook.com/profile.php?id=61550822519949&mibextid=ZbWKwL">
                  <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
                </a>
                <a href="https://twitter.com/Gazing_Calvary?s=09">
                  <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                </a>
                <a href="https://instagram.com/gazingcalvary?igshid=OGY3MTU3OGY1Mw==">
                  <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                </a>
                <a href="https://youtube.com/@GazingCalvary?si=OyLXliD4SrbC2W38">
                  <FontAwesomeIcon icon={faYoutube} className="social-icon" />
                </a>
              </div>     
            </div>
          </div>

          <hr className="text-white" />

          <div className="sb__footer-below flex justify-between mt-1">
            <div className="sb__footer-copyright">
              <p>@{new Date().getFullYear()} Gazing Calvary. All right reserved</p>
            </div>
            
            <div className="sb__footer-below-links">
              <a href="">
                <div>
                  <p>Terms & Conditions</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;