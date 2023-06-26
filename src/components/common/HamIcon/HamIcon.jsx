import { useEffect, useState } from 'react';
import './HamIcon.css';

function HamIcon({ onShow }) {
    const [hamIconIsShow, setHamIconIsShow] = useState(false);

    const openHamIconHandler = () => {
        setHamIconIsShow(!hamIconIsShow);
    };

    useEffect(() => {
        onShow(hamIconIsShow);
    }, [hamIconIsShow, onShow]);

    return (
        <>
            <div
                className={`ham${hamIconIsShow ? ' open' : ''}`}
                onClick={openHamIconHandler}
            >
                <span className='ham-top '></span>
                <span className='ham-middle '></span>
                <span className='ham-bottom '></span>
            </div>
        </>
    );
}

export default HamIcon;
