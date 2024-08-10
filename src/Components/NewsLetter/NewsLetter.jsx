import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
    return (
        <div className='news-letter'>
            <p className='news-letter-dark-p'>Get Exclusive Offers On Your Email</p>
            <p  className='news-letter-light-p'>Subscribe to our newletter and stay updated</p>
            <div className="email-button">
                <input type="email"  placeholder='Your emain id'/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter
