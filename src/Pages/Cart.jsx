// Cart.js
import CartItem from '../Components/CartItem/CartItem';

function Cart({ cartItems }) {
    return (
        <div className='cart'>
          <CartItem/>
        </div>
    );
}

export default Cart;
