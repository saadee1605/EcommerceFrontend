import React, { createContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';




function Item(props) {
    return (
        <div className='item' >
            <Link to={`/product/${props.id}`}> <img src={props.image} alt={props.name} /></Link>
            <p className='link-issue'>{props.name} {props.id} </p>
            <div className="item-prices">
                <div className='link-issue item-new-price'>${props.new_price}</div>
                <div className='link-issue item-old-price'>${props.old_price}</div>
            </div>

        </div>
    );
}

export default Item;































