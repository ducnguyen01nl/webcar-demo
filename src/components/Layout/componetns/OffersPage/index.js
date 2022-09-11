import HeaderTop from '../HeaderTop';
import styles from './OffersPage.module.scss';
import classNames from 'classnames/bind';
import Banner from '../Banner';

import Footer from '../Footer';
import OffersList from '../OfferList';

const cx = classNames.bind(styles);

function OffersPage({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderTop />

            <div className={cx('container')}>
                <Banner />
                <OffersList />
                <Footer />
                {children}
            </div>
        </div>
    );
}

export default OffersPage;
