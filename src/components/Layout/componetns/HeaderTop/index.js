import styles from './HeaderTop.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faClock, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../Auth';
import useValueContext from '~/store/useValueContext';
const cx = classNames.bind(styles);

function HeaderTop() {
    const [scrollMenu, setScrollMenu] = useState('');
    const [valueInput, setValueInput] = useState('');
    const inputRef = useRef();

    const contextValue = useValueContext();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 64) {
                setScrollMenu('scroll');
            } else {
                setScrollMenu('');
            }
        });
    }, []);

    //auth

    const handleLogin = () => {
        contextValue.loginForm.setShowLogin(true);
    };
    const handleRegister = () => {
        contextValue.registerForm.setShowRegister(true);
    };

    const handleChangeValue = (e) => {
        const valueInput = e.target.value;

        if (!valueInput.startsWith(' ')) {
            setValueInput(valueInput);
        }
    };

    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <ul className={cx('header-top-left')}>
                        <li>
                            <FontAwesomeIcon className={cx('icon-headertop')} icon={faEnvelope} />
                            <a href="/">ducnguyen01nl@gmail.com</a>
                        </li>
                        <li> | </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon-headertop')} icon={faClock} />
                            <span>8:00 AM to 5:00 PM</span>
                        </li>
                    </ul>

                    <ul className={cx('header-top-right')}>
                        <li>
                            <FontAwesomeIcon className={cx('icon-headertop')} icon={faUser} />
                            <span onClick={handleLogin}>LOGIN</span>
                        </li>
                        <li> | </li>
                        <li>
                            <span onClick={handleRegister}>REGISTER</span>
                        </li>
                    </ul>
                </div>
                <div className={cx('headerMenu-wrap')}>
                    <div className={cx('headerMenu-container', { scrollMenu })}>
                        <div className={cx('headerMenu-logo')}>
                            <img src={images.logo} alt="mycar" />
                        </div>
                        <ul className={cx('headerMenu-menu')}>
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>
                                <Link to="/about">ABOUT</Link>
                            </li>
                            <li>
                                <Link to="/offers">OFFERS</Link>
                            </li>
                            <li>
                                <Link to="/news">NEWS</Link>
                            </li>
                            <li>
                                <Link to="/contact">CONTACT</Link>
                            </li>
                        </ul>
                        <div className={cx('headerMenu-action')}>
                            <FontAwesomeIcon className={cx('headerMenu-icon')} icon={faCartShopping} />

                            <div className={cx('headerMenu-search')}>
                                <input
                                    ref={inputRef}
                                    value={valueInput}
                                    placeholder="Cars"
                                    onChange={handleChangeValue}
                                />
                                {!!valueInput && (
                                    <FontAwesomeIcon
                                        className={cx('delete-icon')}
                                        icon={faCircleXmark}
                                        onClick={() => {
                                            setValueInput('');
                                            inputRef.current.focus();
                                        }}
                                    />
                                )}
                            </div>
                            <FontAwesomeIcon className={cx('headerMenu-icon')} icon={faSearch} />
                        </div>
                    </div>
                </div>
                <div className={cx('search')}>
                    <input className={cx('search-input')} type="text" placeholder="Name car, detail" />
                    <FontAwesomeIcon className={cx('search-icon')} icon={faSearch} />
                </div>
            </header>
            <Auth />
        </>
    );
}

export default HeaderTop;
