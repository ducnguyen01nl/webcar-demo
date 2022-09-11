import classNames from 'classnames/bind';
import styles from './Service.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Service() {
    return (
        <div className={cx('service-wrap')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('heading-wrap')}>
                        <span>Our Service Cars</span>
                        <h2>EXCLUSIVE CAR FEATURED</h2>
                    </div>
                </div>
                <div className={cx('row', 'service-content')}>
                    <div className={cx('col', 'l-4')}>
                        <div className={cx('service-item', 'left')}>
                            <img src={images.carParts} alt="" />
                            <h4>SUPER FAST CAR</h4>
                            <p>
                                Placlder text commonly used detrate theyjlos visual form amet, consectetur ading elitmod
                                tempor used
                            </p>
                        </div>
                        <div className={cx('service-item', 'left')}>
                            <img src={images.piston} alt="" />
                            <h4>DEALERSHIP POINTS</h4>
                            <p>
                                Placlder text commonly used detrate theyjlos visual form amet, consectetur ading elitmod
                                tempor used
                            </p>
                        </div>
                    </div>
                    <div className={cx('col', 'l-4')}>
                        <img className={cx('carModel')} src={images.carModel1} alt="" />
                    </div>
                    <div className={cx('col', 'l-4')}>
                        <div className={cx('service-item', 'right')}>
                            <img src={images.fan} alt="" />
                            <h4>DEALERSHIP POINTS</h4>
                            <p>
                                Placlder text commonly used detrate theyjlos visual form amet, consectetur ading elitmod
                                tempor used
                            </p>
                        </div>
                        <div className={cx('service-item', 'right')}>
                            <img src={images.jerrycan} alt="" />
                            <h4>DEALERSHIP POINTS</h4>
                            <p>
                                Placlder text commonly used detrate theyjlos visual form amet, consectetur ading elitmod
                                tempor used
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
