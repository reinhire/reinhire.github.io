import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'light',
    isLight: true
}

const changeThemeSlice = createSlice({
    name: 'changeTheme',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { changeTheme } = changeThemeSlice.actions;
export default changeThemeSlice.reducer;
