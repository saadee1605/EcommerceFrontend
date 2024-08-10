import { configureStore } from "@reduxjs/toolkit";
import cartReducers from './Slice/createSlice'
const store=configureStore({
    reducer:{
        cartSlice:cartReducers
    }
})
export default store