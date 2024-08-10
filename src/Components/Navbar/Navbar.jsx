import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cartIcon from '../Assets/cart_icon.png';
import { useSelector } from 'react-redux';
import open from '../Assets/menu_open.svg'
import close from '../Assets/menu_close.svg'
function Navbar() {
    const quantity = useSelector(state => state.cartSlice.quantity)
    const [newclass, addclass] = useState('')
    const ref=useRef()
    const setNewClass = (params) => {
        addclass(params)
    }

    const setOpen=()=>{
        ref.current.style.visibility='visible'
        ref.current.style.right='0px'
    }
  const setclose=()=>{
    ref.current.style.visibility='hidden'
        ref.current.style.right='-300px'
  }
    return (
        <div className='navbar'>
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
                <p>SHOPPER</p>
            </div>
            <img   onClick={setOpen} className='open-navbar' src={open} alt="" />
            <ul ref={ref} className='navbar-ul'>
                <img   onClick={setclose} className='close-navbar navbar-li' src={close} alt="" />

                <li className={`navbar-li ${newclass === 'Shop' ? 'new-class' : ''}`}>
                    <Link onClick={() => setNewClass('Shop')} className='navbar-link' to="/">Shop</Link>
                </li>
                <li className={`navbar-li ${newclass === 'Men' ? 'new-class' : ''}`}>
                    <Link onClick={() => setNewClass('Men')} className='navbar-link' to="/men">Men</Link>
                </li>
                <li className={`navbar-li ${newclass === 'Women' ? 'new-class' : ''}`}>
                    <Link onClick={() => setNewClass('Women')} className='navbar-link' to="/women">Women</Link>
                </li>
                <li className={`navbar-li ${newclass === 'Kids' ? 'new-class' : ''}`}>
                    <Link onClick={() => setNewClass('Kids')} className='navbar-link' to="/kids">Kids</Link>
                </li>
            </ul>
            <div className="navbar-login-cart">
                <Link to='/cart'> <img src={cartIcon} alt="Cart Icon" /></Link>

                <Link to='/login'><button>Login</button></Link>
                <div className="cart-counter">{quantity}</div>
            </div>
        </div>
    );
}

export default Navbar;
