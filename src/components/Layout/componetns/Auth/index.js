import styles from './Auth.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

import useValueContext from '~/store/useValueContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Auth() {
    const contextValue = useValueContext();

    const { showLogin, setShowLogin } = contextValue.loginForm;
    const { showRegister, setShowRegister } = contextValue.registerForm;

    return (
        <div className={cx('auth-wrap', showLogin || showRegister ? 'show' : '')}>
            {/* login form */}
            <div className={cx('login-body', showLogin ? 'show' : '')}>
                <FontAwesomeIcon
                    className={cx('close')}
                    icon={faXmark}
                    onClick={() => {
                        setShowLogin(false);
                    }}
                />
                <div className={cx('heading')}>
                    <h2>LOGIN</h2>
                    <span
                        onClick={() => {
                            setShowLogin(false);
                            setShowRegister(true);
                        }}
                    >
                        REGISTER
                    </span>
                </div>
                <div className={cx('group')}>
                    <input className={cx('email')} type="text" placeholder="Email" />
                </div>
                <div className={cx('group')}>
                    <input className={cx('password')} type="password" placeholder="Password" />
                </div>
                <div className={cx('controls')}>
                    <Button large primary>
                        Login
                    </Button>
                </div>
            </div>

            {/* register form */}
            <div className={cx('register-body', showRegister ? 'show' : '')}>
                <FontAwesomeIcon
                    className={cx('close')}
                    icon={faXmark}
                    onClick={() => {
                        setShowRegister(false);
                    }}
                />
                <div className={cx('heading')}>
                    <h2>REGISTER</h2>
                    <span
                        onClick={() => {
                            setShowLogin(true);
                            setShowRegister(false);
                        }}
                    >
                        LOGIN
                    </span>
                </div>
                <div className={cx('group')}>
                    <input className={cx('email')} type="text" placeholder="Email" />
                </div>
                <div className={cx('group')}>
                    <input className={cx('password')} type="password" placeholder="Password" />
                </div>
                <div className={cx('group')}>
                    <input className={cx('password')} type="password" placeholder="Re-enter the password" />
                </div>
                <div className={cx('controls')}>
                    <Button large primary>
                        Register
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Auth;
