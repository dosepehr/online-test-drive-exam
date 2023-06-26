import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showExam: false,
    finnishExam: false,
    startTime: '',
    endTime: '',
    correctAnswers: 0,
    wrongAnswers: 0,
};

const slice = createSlice({
    name: 'exam',
    initialState,
    reducers: {
        examStarted(state, action) {
            state.showExam = true;
            state.startTime = action.payload;
        },
        examEnded(state, action) {
            state.finnishExam = true;
            state.endTime = action.payload;
        },
        answeredRight(state, action) {
            state.correctAnswers += 1;
        },
        answeredFalse(state, action) {
            state.wrongAnswers += 1;
        },
    },
});

export const { examStarted, examEnded, answeredFalse, answeredRight } =
    slice.actions;

export default slice.reducer;
