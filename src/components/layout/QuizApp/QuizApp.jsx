import React, { useState } from 'react';
import './QuizApp.css';
import { Question, Resualt } from '../../index';
import { useContext } from 'react';
import { mainContext } from '../../../context';
import { useGetQuestionsQuery } from '../../../redux/reducers/apiSlice';

const QuizApp = () => {
    const { data } = useGetQuestionsQuery();
    const {
        wrongAnswer,
        correctAnswer,
        endTime,
        setEndTime,
        showExam,
        startExam,
    } = useContext(mainContext);
    const [isFinishExam, setIsFinishExam] = useState(false);
    const endExam = () => {
        setIsFinishExam(true);
        setEndTime(new Date().getTime());
    };

    return (
        <>
            <div className='quiz-app'>
                <div className='container'>
                    {!showExam && (
                        <button className='start-quiz-btn' onClick={startExam}>
                            شروع آزمون
                        </button>
                    )}
                    {showExam &&
                        (isFinishExam ? (
                            <Resualt
                                endTime={endTime}
                                correctAnswer={correctAnswer}
                                wrongAnswer={wrongAnswer}
                            />
                        ) : (
                            <>
                                <div className='quiz-app-wrapper'>
                                    {data?.map((question) => (
                                        <Question
                                            key={question.id}
                                            {...question}
                                        />
                                    ))}

                                    <button
                                        className='finish-quiz-btn'
                                        onClick={endExam}
                                    >
                                        پایان آزمون
                                    </button>
                                </div>
                            </>
                        ))}
                </div>
            </div>
        </>
    );
};

export default QuizApp;
