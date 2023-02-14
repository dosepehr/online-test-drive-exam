import React from 'react';
import { HamIcon, Menu } from '../../index';
import './Header.css';

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='container'>
                    <div className='header-wrapper'>
                        <HamIcon />
                        <a href=' ' className='header__logo'>
                            <h3 className='header__title'>
                                آزمون آیین نامه رانندگی اصلی
                            </h3>
                        </a>
                        <nav className='nav'>
                            <ul className='nav__list'>
                                <li className='nav__item'>
                                    <a href=' ' className='nav__link'>
                                        خانه
                                    </a>
                                </li>
                                <li className='nav__item'>
                                    <a href=' ' className='nav__link'>
                                        درباره ما
                                    </a>
                                </li>
                                <li className='nav__item'>
                                    <a href=' ' className='nav__link'>
                                        سوالات
                                    </a>
                                </li>
                                <li className='nav__item'>
                                    <a href=' ' className='nav__link'>
                                        تماس با ما
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <Menu />
                </div>
            </header>
        </>
    );
};

export default Header;
