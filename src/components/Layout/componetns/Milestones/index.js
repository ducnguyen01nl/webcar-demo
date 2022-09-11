import CountUp from 'react-countup';
import styles from './Milestones.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarRear, faGear, faRocket, faTractor } from '@fortawesome/free-solid-svg-icons';
// import { counter } from '@fortawesome/fontawesome-svg-core';

const cx = classNames.bind(styles);

function Milestones() {
    return (
        <div className={cx('Milestones-wrap')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('item', 'col', 'l-3')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faCarRear} />
                        <div className="data">
                            <CountUp className={cx('number')} end={2465} suffix="+" />
                            <p>NEW CARS IN STOCK</p>
                        </div>
                    </div>
                    <div className={cx('item', 'col', 'l-3')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faTractor} />
                        <div className="data">
                            <CountUp className={cx('number')} end={2873} suffix="+" />
                            <p>USER CARD IN STOCK</p>
                        </div>
                    </div>
                    <div className={cx('item', 'col', 'l-3')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faGear} />
                        <div className="data">
                            <CountUp className={cx('number')} end={1019} suffix="+" />
                            <p>SERVICE CENTERS</p>
                        </div>
                    </div>
                    <div className={cx('item', 'col', 'l-3')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faRocket} />
                        <div className="data">
                            <CountUp
                                className={cx('number')}
                                end={28}
                                suffix="K"
                                // ref={(countUp) => {
                                //     this.myCountUp = countUp;
                                // }}
                            />
                            <p>HAPPY CLIENTS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Milestones;
