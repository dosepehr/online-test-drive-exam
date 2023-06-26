import { useState } from 'react';
import { Header, QuizApp, Footer } from './components';
import { mainContext } from './context';
import React from 'react';
const App = () => {
    const [hamIconIsShow, setHamIconIsShow] = useState(false);
    const [isShowNav, setIsShowNav] = useState(false);

    return (
        <>
            <mainContext.Provider
                value={{
                    hamIconIsShow,
                    setHamIconIsShow,
                    setIsShowNav,
                    isShowNav,
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
