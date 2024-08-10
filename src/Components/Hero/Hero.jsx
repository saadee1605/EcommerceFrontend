import React from 'react'
import './Hero.css'
import handIcon from '../Assets/hand_icon.png'
import arrowIcon from '../Assets/arrow.png'
import heroImage from '../Assets/hero_image.png'
function Hero() {
    return (
        <div className='hero'>
            <div className="right-hero">
                <div className="inner-right-hero">
                    <p className='para1'>NEW ARRIVALS ONLY</p>
                    <div className="hero2"><h1 className='para2'>new </h1><img src={handIcon} alt="" /> </div>
                    <h1 className='para3'>collections</h1>
                    <h1 className='para4'>for everyone</h1>
                    <div className='hero-button'>
                        <button>Latest Collection <img src={arrowIcon} alt="" /></button>

                    </div>
                </div>
            </div>
            <div className="left-hero">
                <img src={heroImage} alt="" className="left-hero-image" />
            </div>
        </div>
    )
}

export default Hero
