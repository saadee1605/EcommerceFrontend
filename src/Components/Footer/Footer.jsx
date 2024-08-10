import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import insta from '../Assets/whatsapp_icon.png'
import pinster from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="icon-title">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <div className="lists">
                <ul className='list-ul'>
                    <li className='list-li' >Company</li>
                    <li className='list-li'>Products</li>
                    <li className='list-li'>Offices</li>
                    <li className='list-li'>About</li>
                    <li className='list-li'>Contact</li>
                </ul>
            </div>
            <div className="social-icon">
                <img src={insta} alt="" />
                <img src={pinster} alt="" />
                <img src={whatsapp} alt="" />
            </div>
            <div className="copyrite">
                <hr />
                Copyright @ 2024-All Rights Reserved
            </div>
        </div>
    )
}

export default Footer
