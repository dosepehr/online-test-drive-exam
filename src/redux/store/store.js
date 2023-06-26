import { configureStore } from '@reduxjs/toolkit';
import examSlice from '../reducers/examSlice';
import { apiSlice } from '../reducers/apiSlice';

const store = configureStore({
    reducer: {
        exam: examSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
