import HeaderTop from '../HeaderTop';
import styles from './ContactPage.module.scss';
import classNames from 'classnames/bind';
import Banner from '../Banner';

import Footer from '../Footer';
import Feedback from '../Feedback';

const cx = classNames.bind(styles);

function ContactPage({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderTop />

            <div className={cx('container')}>
                <Banner />
                <Feedback />
                <Footer />
                {children}
            </div>
        </div>
    );
}

export default ContactPage;
