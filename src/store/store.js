import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store=configureStore({
   reducer:{
      cards:cartSlice,
   }
})

export default store