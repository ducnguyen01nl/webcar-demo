import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({ children, large = false, small = false, primary = false, normal = false, orange = false }) {
    const classes = cx('main-btn', {
        large,
        small,
        primary,
        normal,
        orange,
    });

    return <button className={classes}>{children}</button>;
}

export default Button;
