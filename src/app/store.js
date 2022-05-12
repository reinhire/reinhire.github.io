import { configureStore } from '@reduxjs/toolkit';
import changeThemeSlice from '../slices/theme';

export const store = configureStore({
    reducer: { theme: changeThemeSlice }
})