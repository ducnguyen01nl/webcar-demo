import HeaderTop from '../HeaderTop';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Banner from '../Banner';

import Favors from '../Favors';
import ProminentCars from '../ProminentCars';
import Service from '../Service';
import Footer from '../Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderTop />

            <div className={cx('container')}>
                <Banner />
                <Favors />
                <ProminentCars />
                <Service />
                <Footer />
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;
