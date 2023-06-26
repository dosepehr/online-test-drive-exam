import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    startTime: '',
    endTime: '',
};

const slice = createSlice({
    name: 'exam',
    initialState,
    reducers: {
        examStarted(state, action) {
            state.startTime = action.payload;
        },
        examEnded(state, action) {
            state.endTime = action.payload;
        },
    },
});

export const { examStarted, examEnded } = slice.actions;

export default slice.reducer;
