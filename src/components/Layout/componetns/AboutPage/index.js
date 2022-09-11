import HeaderTop from '../HeaderTop';
import styles from './AboutPage.module.scss';
import classNames from 'classnames/bind';
import Banner from '../Banner';
import Introduce from '~/components/Introduce';
import Footer from '../Footer';
import Statistics from '~/components/Statistics';
import Milestones from '../Milestones';

const cx = classNames.bind(styles);

function AboutPage({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderTop />

            <div className={cx('container')}>
                <Banner />
                <Introduce />
                <Statistics />
                <Milestones />
                <Footer />
                {children}
            </div>
        </div>
    );
}

export default AboutPage;
