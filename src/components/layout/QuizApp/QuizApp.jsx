import { useDispatch, useSelector } from 'react-redux';
import { Question, Result } from '../../index';
import { useGetQuestionsQuery } from '../../../redux/reducers/apiSlice';
import { examEnded, examStarted } from '../../../redux/reducers/examSlice';
import './QuizApp.css';

const QuizApp = () => {
    const dispatch = useDispatch();
    const { data: questions } = useGetQuestionsQuery();
    const { showExam, finnishExam } = useSelector((state) => state.exam);
    const endExam = () => {
        dispatch(examEnded(new Date().getTime()));
    };

    const startExamHandler = () => {
        dispatch(examStarted(new Date().getTime()));
    };

    return (
        <>
            <div className='quiz-app'>
                <div className='container'>
                    {!showExam && (
                        <button
                            className='start-quiz-btn'
                            onClick={startExamHandler}
                        >
                            شروع آزمون
                        </button>
                    )}
                    {showExam &&
                        (finnishExam ? (
                            <Result questionsLength={questions?.length} />
                        ) : (
                            <>
                                <div className='quiz-app-wrapper'>
                                    {questions?.map((question) => (
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
