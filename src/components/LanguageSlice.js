import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    initialState: {
        lang: "en", 
    },
    reducers: {
        toggleLanguage: (state,action) => {
            state.lang = action.payload;
        },
    },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
    
