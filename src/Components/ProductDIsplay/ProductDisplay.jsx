import React, { useState, useEffect, useContext, createContext } from 'react';
import './ProductDisplay.css';
import stars from '../Assets/star_icon.png';
import dull_star from '../Assets/star_dull_icon.png';
import CartItem from '../CartItem/CartItem';
import { useDispatch } from 'react-redux';
import { addToTheCart } from '../../ReactRedux/Slice/createSlice';
function ProductDisplay({ product }) {
    const dispatch=useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
   
    const handleAddToTheCart=(payload)=>{
     dispatch(addToTheCart(payload))
    }

    return (
        <div className='product-display'>
            <div className="product-display-right">
                <div className="image-list-product">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="image-product">
                    <img src={product.image} alt="" />
                </div>
            </div>
            <div className="product-display-left">
                <h1>{product.name}</h1>
                <div className="left-product-stars">
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                    <img src={dull_star} alt="" />
                    <p>(122)</p>
                </div>
                <div className="product-right-prices">
                    <p className='light-price'>${product.old_price}</p>
                    <p className='new-price'>${product.new_price}</p>
                </div>
                <div className="product-right-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, quod? Esse libero aut, ipsa vero odio reiciendis
                    suscipit ipsam amet? Tempore hic similique qui velit alias, tempora minima voluptatibus iusto!
                </div>
                <div className="product-select-size">
                    <h1>Select Size</h1>
                    <div className="display-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button className='button-product'
                onClick={()=>handleAddToTheCart(product)}
                >ADD TO CART
                </button>
                <div className="category-tags">
                    <div><span>Category</span>: Women, T-Shirt, Crop Top</div>
                    <div><span>Tags</span>: Modern, Latest</div>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;
