import { useContext } from 'react';
import './Result.css';
import { questions } from '../../../constants/questionsData';
import { mainContext } from '../../../context';
import { useSelector } from 'react-redux';
function Result() {
    const exam = useSelector((state) => state.exam);
    const { correctAnswer, wrongAnswer } = useContext(mainContext);
    const { startTime, endTime } = exam;
    const secondBetweenTwoDate =
        Math.floor(Math.abs((endTime - startTime) / 1000)) % 60;

    const minutesBetweenTwoDate = Math.floor(
        Math.abs(endTime - startTime) / 6e4
    );
    return (
        <>
            <div className='resualt-box'>
                <p className='resualt-title'>نتایج آزمون شما</p>
                <div className='answers-count-box'>
                    <p className='answers-desc'>پاسخ درست :</p>
                    <p className='answers-count'>{correctAnswer}</p>
                </div>

                <div className='answers-count-box'>
                    <p className='answers-desc'>پاسخ نادرست :</p>
                    <p className='answers-count'>{wrongAnswer}</p>
                </div>

                <div className='answers-count-box'>
                    <p className='answers-desc'>تعداد بی پاسخ :</p>
                    <p className='answers-count'>
                        {questions.length - (correctAnswer + wrongAnswer)}
                    </p>
                </div>
                <div className='answers-count-box'>
                    <p className='answers-desc'>وضعیت قبولی :</p>
                    {correctAnswer >= 26 ? (
                        <>
                            <p className='answers-count answers-count--accept'>
                                قبول
                            </p>
                        </>
                    ) : (
                        <>
                            <p className='answers-count answers-count--reject'>
                                مردود
                            </p>
                        </>
                    )}
                </div>

                <div className='time-box'>
                    <p className='time-desc'>مدت زمان سپری شده :</p>
                    <p className='time-value'>
                        {minutesBetweenTwoDate} دقیقه و {secondBetweenTwoDate}{' '}
                        ثانیه
                    </p>
                </div>
            </div>
        </>
    );
}

export default Result;
