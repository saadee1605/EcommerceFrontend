import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [], 
    quantity: 0,
    itemQuantity:0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToTheCart(state, action) {
            const item = action.payload;
            const existingItem = state.carts.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                existingItem.itemQuantity += 1;
            } else {
                state.carts.push({ ...item, itemQuantity: 1,quantity:1});
            }

            state.quantity = state.quantity+1;
        },
        removeFromTheCart(state, action) {
            const itemId = action.payload;
            const existingItem = state.carts.find(cartItem => cartItem.id === itemId.id);
        
            if (existingItem  ) {
                if (existingItem.itemQuantity > 0 && state.quantity>0) {
                    existingItem.itemQuantity -= 1;
                    state.quantity = state.quantity-1;

                } else {
                    state.carts = state.carts.filter(cartItem => cartItem.id !== itemId);
                }
                

            }
        },
        clearCart(state) {
            state.carts = [];
            state.quantity = 0;
        }
    }
});

export const { addToTheCart, removeFromTheCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
