import { faCoins, faLocationDot, faStore, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Favors.module.scss';

const cx = classNames.bind(styles);

function Favors() {
    return (
        <div className={cx('favors-wrap')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-3')}>
                        <div className={cx('favors-item')}>
                            <FontAwesomeIcon className={cx('favors-icon', 'store')} icon={faStore} />
                            <h3>Dealership Points</h3>
                            <p>Placlder text commonly is used detrate theys visul consectetur ading elitmod use</p>
                        </div>
                    </div>
                    <div className={cx('col', 'l-3')}>
                        <div className={cx('favors-item')}>
                            <FontAwesomeIcon className={cx('favors-icon', 'users')} icon={faUsers} />
                            <h3>Trusted by clients</h3>
                            <p>Placlder text commonly is used detrate theys visul consectetur ading elitmod use</p>
                        </div>
                    </div>
                    <div className={cx('col', 'l-3')}>
                        <div className={cx('favors-item')}>
                            <FontAwesomeIcon className={cx('favors-icon', 'location')} icon={faLocationDot} />
                            <h3>We are your location</h3>
                            <p>Placlder text commonly is used detrate theys visul consectetur ading elitmod use</p>
                        </div>
                    </div>
                    <div className={cx('col', 'l-3')}>
                        <div className={cx('favors-item')}>
                            <FontAwesomeIcon className={cx('favors-icon', 'coins')} icon={faCoins} />
                            <h3>Easy Financing</h3>
                            <p>Placlder text commonly is used detrate theys visul consectetur ading elitmod use</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Favors;
