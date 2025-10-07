import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './ThemeSlice';
import languageReducer from './LanguageSlice';
import productReducer from './ProductSlice';
import cartReducer from './CartSlice';  


export const store = configureStore({
    reducer: {
        // products: productReducer,
        // cart: cartReducer
        theme : themeReducer,
        language:languageReducer
    },
}) 
export default store;