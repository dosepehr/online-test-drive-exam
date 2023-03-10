import React, { useState, useEffect } from "react";
import "./QuizApp.css";
import { Question, Resualt } from "../../index";
import { questions as questionList } from "../../../constants/questionsData";
import { useContext } from "react";
import { mainContext } from "../../../context";

const QuizApp = () => {
    const [questions, setQuestions] = useState([]);
    const { wrongAnswer, correctAnswer, endTime, setEndTime, showExam, startExam } =
        useContext(mainContext);
    const [isFinishExam, setIsFinishExam] = useState(false);

    useEffect(() => {
        setQuestions(questionList);
    }, []);

    const endExam = () => {
        setIsFinishExam(true);
        setEndTime(new Date().getTime());
    };

    return (
        <>
            <div className="quiz-app">
                <div className="container">
                    {!showExam && (
                        <button className="start-quiz-btn" onClick={startExam}>
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
                                <div className="quiz-app-wrapper">
                                    {questions.length > 0 &&
                                        questions.map((question) => (
                                            <Question key={question.id} {...question} />
                                        ))}

                                    <button className="finish-quiz-btn" onClick={endExam}>
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
