import { useEffect } from 'react-router-';
import './Result.css';
import { useDispatch, useSelector } from 'react-redux';
import { examEnded } from '../../../redux/reducers/examSlice';
function Result({ questionsLength }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(examEnded(new Date().getTime()));
    }, [dispatch]);
    const { startTime, endTime, correctAnswers, wrongAnswers } = useSelector(
        (state) => state.exam
    );
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
                    <p className='answers-count'>{correctAnswers}</p>
                </div>

                <div className='answers-count-box'>
                    <p className='answers-desc'>پاسخ نادرست :</p>
                    <p className='answers-count'>{wrongAnswers}</p>
                </div>

                <div className='answers-count-box'>
                    <p className='answers-desc'>تعداد بی پاسخ :</p>
                    <p className='answers-count'>
                        {questionsLength - (correctAnswers + wrongAnswers)}
                    </p>
                </div>
                <div className='answers-count-box'>
                    <p className='answers-desc'>وضعیت قبولی :</p>
                    {correctAnswers >= 26 ? (
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
