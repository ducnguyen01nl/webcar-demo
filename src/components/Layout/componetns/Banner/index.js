import styles from './Banner.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { useEffect, useState } from 'react';
// import { publicRoutes } from '~/routes';
import { useLocation } from 'react-router-dom';
const cx = classNames.bind(styles);

const init = {
    bannerPage: [
        {
            id: 1,
            page: '/',
            title: 'FIND PERFECT CAR',
            sub: 'A car dealership, or vehicle local distribution, is a business',
        },
        {
            id: 2,
            page: '/about',
            title: 'ABOUT US',
            sub: 'We always give the latest, most prominent and accurate information',
        },
        {
            id: 3,
            page: '/offers',
            title: 'OFFERS',
            sub: 'We always put customers needs first',
        },
        {
            id: 4,
            page: '/news',
            title: 'NEWS',
            sub: 'Clear, meticulous and accurate news',
        },
        {
            id: 5,
            page: '/contact',
            title: 'CONTACT',
            sub: 'Always bring customers the closeness',
        },
    ],
};

function Banner() {
    const [title, setTitle] = useState([]);
    const [pathLocation, setPathLocation] = useState('');
    const location = useLocation();

    useEffect(() => {
        setTitle(init.bannerPage);
        setPathLocation(location.pathname);
    }, [pathLocation, location]);

    return (
        <div className={cx('main-banner')}>
            {title
                .filter((a) => a.page === pathLocation)
                .map((data, index) => {
                    return (
                        <div className={cx('banner-title')} key={index}>
                            <h1>{data.title}</h1>
                            <p>{data.sub}</p>
                            <div className={cx('banner-btn')}>
                                <Button large primary>
                                    FIND IT NOW
                                </Button>
                            </div>
                        </div>
                    );
                })}
            <div className={cx('banner-search-wrap')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row', 'banner-search-content')}>
                        <div className={cx('search-item', 'col', 'l-6')}>
                            <span className={cx('span-item')}>Range of vehicle</span>
                            <input className={cx('input-item')} type={'text'} placeholder={'sport car'} />
                        </div>
                        <div className={cx('search-item', 'col', 'l-2')}>
                            <span className={cx('span-item')}>Car color</span>
                            <input className={cx('input-item')} type={'text'} placeholder={'red'} />
                        </div>
                        <div className={cx('search-item', 'col', 'l-2')}>
                            <span className={cx('span-item')}>Country</span>
                            <input className={cx('input-item')} type={'text'} placeholder={'viet nam'} />
                        </div>
                        <div className={cx('search-item', 'btn-search', 'col', 'l-2')}>
                            <Button large primary>
                                SELECT VEHICLE
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
