import React from 'react';
import './BreadCrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
function BreadCrums(props) {
    return (
        <div className='breadcrums'>
            Home <img src={arrow_icon} alt="" /> 
            Shop <img src={arrow_icon} alt="" />
            {props.category}<img src={arrow_icon} alt="" />
            {props.name}
        </div>
    );
}

export default BreadCrums;
