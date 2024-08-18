import React from 'react';
import './CartItem.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToTheCart, removeFromTheCart, clearCart } from '../../ReactRedux/Slice/createSlice';

function CartItem() {
    const allCartsData = useSelector(state => state.cartSlice.carts);
    const totalQuantity = useSelector(state => state.cartSlice.quantity);
    const dispatch = useDispatch();

    const reduce = (payload) => {
        console.log('reduce', payload);
        dispatch(removeFromTheCart(payload));
    }

    const increase = (payload) => {
        console.log(payload);
        dispatch(addToTheCart(payload));
    }

    const clear = () => {
        dispatch(clearCart());
    }

    return (
        <div className='CartItem'>
            <h1>Items:{totalQuantity}</h1>
            {allCartsData.map((element, index) => (
                element.itemQuantity > 0 && (
                    <div className="cart-item" key={element.id}>
                        <img src={element.image} alt={element.name} />
                        <div className="cart-item-data">
                            <div className='cart-item-name'>{element.name}</div>
                            <div className="cart-item-prices">
                                <p className='newprice-cart-item'>New Price: {element.new_price}</p>
                                <p className='oldprice-cart-item'>Old Price: {element.old_price}</p>
                            </div>
                            <div className="buttons">
                                <button onClick={() => reduce(element)}>-</button>
                                <p>Quantity: {element.itemQuantity}</p>
                                <button onClick={() => increase(element)}>+</button>
                            </div>
                            <div className="total-price-item">
                                Total: {(element.new_price * element.itemQuantity).toFixed(2)}
                            </div>
                        </div>
                    </div>
                )
            ))}
            {allCartsData.length > 0 && <button onClick={clear} className='clear-cart'>Clear Cart</button>}
        </div>
    );
}

export default CartItem;
