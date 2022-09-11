import HeaderTop from '../HeaderTop';
import styles from './NewsPage.module.scss';
import classNames from 'classnames/bind';
import Banner from '../Banner';

import Footer from '../Footer';
import Blog from '../Blog';

const cx = classNames.bind(styles);

function NewsPage({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderTop />

            <div className={cx('container')}>
                <Banner />
                <Blog />
                <Footer />
                {children}
            </div>
        </div>
    );
}

export default NewsPage;
