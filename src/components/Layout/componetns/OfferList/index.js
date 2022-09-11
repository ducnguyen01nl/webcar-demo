import styles from './OffersList.module.scss';
import classNames from 'classnames/bind';
import { init } from '../ProminentCars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarRear, faGear, faRocket, faStar, faTractor } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function OffersList() {
    const [carValue, setCarValue] = useState([]);

    useEffect(() => {
        setCarValue(init.cars);
    }, []);

    return (
        <div className={cx('offersList-wrap')}>
            <div className={cx('grid', 'wide')}>
                {carValue.map((data) => (
                    <div key={data.id} className={cx('row')}>
                        <div className={cx('col', 'l-4', 'sample')}>
                            <img src={data.img} alt="" />
                            <h3>{data.nameCar}</h3>
                        </div>
                        <div className={cx('col', 'l-8', 'wrap-info')}>
                            <div className={cx('info', 'row')}>
                                <div className={cx('price')}>
                                    <span>${data.price}</span>
                                    <div className={cx('star')}>
                                        <FontAwesomeIcon className={cx('icon-star')} icon={faStar} />
                                        <FontAwesomeIcon className={cx('icon-star')} icon={faStar} />
                                        <FontAwesomeIcon className={cx('icon-star')} icon={faStar} />
                                        <FontAwesomeIcon className={cx('icon-star')} icon={faStar} />
                                        <FontAwesomeIcon className={cx('icon-star')} icon={faStar} />
                                    </div>
                                </div>
                                <div className={cx('assess')}>
                                    <div className={cx('classify')}>
                                        <span>{data.type}</span>
                                        <p>Very good</p>
                                    </div>
                                    <div className={cx('point')}>{data.star}.0</div>
                                </div>
                            </div>
                            <div className={cx('row')}>
                                <span className={cx('description')}>
                                    Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.
                                </span>
                            </div>
                            <div className={cx('row', 'nav')}>
                                <div>
                                    <FontAwesomeIcon className={cx('icon')} icon={faCarRear} />
                                    <FontAwesomeIcon className={cx('icon')} icon={faTractor} />
                                    <FontAwesomeIcon className={cx('icon')} icon={faGear} />
                                    <FontAwesomeIcon className={cx('icon')} icon={faRocket} />
                                </div>
                                <Button large primary>
                                    BOOK NOW
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OffersList;
