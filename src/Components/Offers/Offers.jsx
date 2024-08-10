import React from 'react'
import './Offers.css'
import exc_img from '../Assets/exclusive_image.png'
function Offers() {
    return (
        <div className='offers'>
            <div className='offers-right'>
                <div className="inner-right">
                    <p className='offers-right-bold-p'>Exclusive</p>
                    <p className='offers-right-bold-p'>Offers For You</p>
                    <p className='offers-right-lessbold-p'>ONLY ON BEST SELLERS PRODUCT</p>
                        
                    <button className='offers-button'>Check Now</button>
                </div>
            </div>
            <div className='offers-left'>
                <img src={exc_img} alt="" />
            </div>

        </div>
    )
}

export default Offers
