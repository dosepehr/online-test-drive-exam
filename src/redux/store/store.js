import { configureStore } from '@reduxjs/toolkit';
import examSlice from '../reducers/examSlice';

const store = configureStore({
    reducer: {
        exam: examSlice,
    },
});

export default store;
