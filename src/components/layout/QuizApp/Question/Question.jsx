import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    answeredFalse,
    answeredRight,
} from '../../../../redux/reducers/examSlice';
import './Question.css';
const Question = ({
    id,
    questionTitle,
    questionOptions,
    questionSource,
    questionDesc,
    img,
}) => {
    const dispatch = useDispatch();
    const [showAnsQues, setShowAnsQues] = useState(false);
    const [showDesc, setShowDesc] = useState(false);

    const answeredHandler = (e, isCrr) => {
        setShowDesc(true);
        if (isCrr) {
            dispatch(answeredRight());
            e.target.parentElement.parentElement.classList.add(
                'option-item--true'
            );
        } else {
            dispatch(answeredFalse());
            e.target.parentElement.parentElement.classList.add(
                'option-item--false'
            );
            setShowAnsQues(true);
        }

        const allOptions = [
            ...e.target.parentElement.parentElement.parentElement.children,
        ];
        allOptions.forEach((option) => {
            option.children[0].children[0].disabled = true;
            option.classList.add('option-item--disabled');
        });
    };
    return (
        <>
            <div className='form-container'>
                <div className='options-wrapper'>
                    <div className='question-title-wrapper'>
                        <h3 className='question-number'>{id}#</h3>
                        <p className='question-title'>{questionTitle}</p>
                    </div>
                    <ul className='question-list'>
                        {questionOptions.map((item, index) => {
                            const uniqueId = crypto.randomUUID();
                            return (
                                <li
                                    className={`option-item ${
                                        showAnsQues
                                            ? item.isCorrect
                                                ? 'option-item--true'
                                                : ''
                                            : ''
                                    }`}
                                    key={index}
                                >
                                    <label
                                        className='option-item__answer'
                                        htmlFor={uniqueId}
                                    >
                                        <input
                                            onClick={(e) => {
                                                answeredHandler(
                                                    e,
                                                    item.isCorrect
                                                );
                                            }}
                                            type='radio'
                                            className='option-item__bool'
                                            name={`${id}`}
                                            id={uniqueId}
                                        />
                                        {item.answer}
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='form-container__img-wrapper'>
                    <img src={img} className='question-img' alt='' />
                </div>
            </div>
            <div className='details-box'>
                {showDesc && (
                    <div>
                        <p className='question-description'>{questionDesc}</p>
                        <p className='question-source'>{questionSource}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Question;
