import styles from './Feedback.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Feedback() {
    return (
        <div className={cx('feedback-wrap')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('feedback-message')}>
                    <h1 className={cx('title')}>GET IN TOUCH</h1>
                    <div className={cx('info')}>
                        <input type="text" placeholder="Name" className={cx('input', 'name')} />
                        <input type="email" placeholder="Email" className={cx('input', 'email')} />
                    </div>
                    <input type="text" placeholder="Subject" className={cx('input', 'subject')} />
                    <textarea className={cx('input', 'message')} placeholder="Message"></textarea>
                    <Button primary large className={cx('button')}>
                        Send message
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
