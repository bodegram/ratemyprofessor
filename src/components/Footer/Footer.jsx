import React, {useState} from 'react'
import './Footer.css'

export default function Footer() {
const [showFooter, setShowFooter] = useState(false)
const toggleFooter = () =>{
    setShowFooter(!showFooter)
}
  return (
    <footer className='container'>
        <div className="footer-toggle">
            <div onClick={toggleFooter}>i {showFooter ? 'true': 'false'}</div>
        </div>
       {
        showFooter && (
            <div className="footer-top">
            <div className='footer-item'>
                <div className="footer-item-header">
                    <h3>SITE</h3>
                </div>
                <div className="footer-item-menu">
                    <div>
                       <span>About</span>
                    </div>
                    <div>
                       <span>Help</span>
                    </div>
                    <div>
                       <span>Site Guidelines</span>
                    </div>
                </div>
            </div>
            <div className='footer-item'>
                <div className="footer-item-header">
                    <h3>LEGAL</h3>
                </div>
                <div className="footer-item-menu">
                    <div>
                       <span>Terms & Conditions</span>
                    </div>
                    <div>
                       <span>Privacy Policy</span>
                    </div>
                    <div>
                       <span>Copyright Compliance Policy</span>
                    </div>
                    <div>
                       <span>CA Notice at Collection</span>
                    </div>
                    <div>
                       <span>CA Do Not Sell or Share My Personal Information</span>
                    </div>
                </div>
            </div>
            <div className='footer-item'>
                <div className="footer-item-header">
                    <h3>PARTNERS</h3>
                </div>
                <div className="footer-item-menu">
                    <div>
                       <span>Optimum</span>
                    </div>
                   
                </div>
            </div>
        </div>
        )
       }
        <div className="footer-bottom">
            <div>
              © 2024 Altice USA News, Inc. All Rights Reserved
            </div>
            <div className='footer-social'>
                <div><span>f</span></div>
                <div><span>i</span></div>
                <div><span>t</span></div>
            </div>
        </div>
    </footer>
  )
}
