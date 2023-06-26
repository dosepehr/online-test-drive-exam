import React, { useState } from 'react';
import './QuizApp.css';
import { Question, Resualt } from '../../index';
import { useContext } from 'react';
import { mainContext } from '../../../context';
import { useGetQuestionsQuery } from '../../../redux/reducers/apiSlice';
import { useDispatch } from 'react-redux';
import { examEnded } from '../../../redux/reducers/examSlice';

const QuizApp = () => {
    const dispatch = useDispatch();
    const { data } = useGetQuestionsQuery();
    const { showExam, startExam } = useContext(mainContext);
    const [isFinishExam, setIsFinishExam] = useState(false);
    const endExam = () => {
        setIsFinishExam(true);
        dispatch(examEnded(new Date().getTime()));
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
                            <Resualt />
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
