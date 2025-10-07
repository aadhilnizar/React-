// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [], 
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const existingItem = state.items.find(item => item.id === action.payload.id);
//       if (existingItem) {
//         existingItem.qty += 1;
//       } else {
//         state.items.push({ ...action.payload, qty: 1 });
//       }
//     },
//     removeFromCart: (state, action) => {
      
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;
