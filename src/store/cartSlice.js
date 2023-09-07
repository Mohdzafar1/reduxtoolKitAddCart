import { createSlice } from "@reduxjs/toolkit"



const cartSlice=createSlice({
   name:"card",
   initialState:[],
   reducers:{
     add(state,action){
        state.push(action.payload)
     },
     deleteSingleData(state,action){
       state.splice(action.payload,1)
     },
     deleteAllData(state,action){
       return []
     }
     
   }
})

export default cartSlice.reducer;
export const {add,deleteSingleData,deleteAllData} =cartSlice.actions;