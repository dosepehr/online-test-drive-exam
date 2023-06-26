import { useState } from 'react';
import { Header, QuizApp, Footer } from './components';
import { mainContext } from './context';
import React from 'react';
import { useDispatch } from 'react-redux';
import { examStarted } from './redux/reducers/examSlice';
const App = () => {
    const dispatch = useDispatch();
    const [menuOpen, setMenuOpen] = useState(false);
    const [score, setScore] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [wrongAnswer, setWrongAnswer] = useState(0);
    const [showExam, setShowExam] = useState(false);
    const [endTime, setEndTime] = useState(0);
    const [hamIconIsShow, setHamIconIsShow] = useState(false);
    const [isShowNav, setIsShowNav] = useState(false);
    const [isFinishExam, setIsFinishExam] = useState(false);

    const startExam = () => {
        setShowExam(true);
        dispatch(examStarted(new Date().getTime()));
    };

    return (
        <>
            <mainContext.Provider
                value={{
                    menuOpen,
                    setMenuOpen,
                    score,
                    setScore,
                    correctAnswer,
                    setCorrectAnswer,
                    wrongAnswer,
                    setWrongAnswer,
                    endTime,
                    setEndTime,
                    showExam,
                    startExam,
                    hamIconIsShow,
                    setHamIconIsShow,
                    setIsShowNav,
                    isShowNav,
                    isFinishExam,
                    setIsFinishExam,
                }}
            >
                <Header />
                <QuizApp />
                <Footer />
            </mainContext.Provider>
        </>
    );
};

export default App;
