import styles from './ProminentCars.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump, faGear, faRoad, faStar } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

import CarButton from './CarButton';

import useValueContext from '~/store/useValueContext';

const cx = classNames.bind(styles);

export const init = {
    cars: [
        {
            id: 1,
            img: 'https://vnn-imgs-f.vgcloud.vn/2019/03/19/18/o-to-moi-1.jpg',
            nameCar: 'Alfa Romeo Giulia',
            description: 'Placlder text commonly used detrate',
            gear: 'automatic',
            fuel: 'Diesel',
            range: 7500,
            star: 5,
            price: 3000,
            type: 'New car',
        },
        {
            id: 2,
            img: 'https://vnn-imgs-f.vgcloud.vn/2019/03/19/18/o-to-moi-2.jpg',
            nameCar: 'Aston Martin DBS',
            description: 'Placlder text commonly used detrate',
            gear: 'automatic',
            fuel: 'Diesel',
            range: 7500,
            star: 5,
            price: 3500,
            type: 'New car',
        },
        {
            id: 3,
            img: 'https://vnn-imgs-f.vgcloud.vn/2019/03/19/18/o-to-moi-3.jpg',
            nameCar: 'BMW i8',
            description: 'Placlder text commonly used detrate',
            gear: 'automatic',
            fuel: 'Diesel',
            range: 7500,
            star: 5,
            price: 3500,
            type: 'Used car',
        },
        {
            id: 4,
            img: 'https://vnn-imgs-f.vgcloud.vn/2019/03/19/18/o-to-moi-4.jpg',
            nameCar: 'Bugatti Chiron',
            description: 'Placlder text commonly used detrate',
            gear: 'automatic',
            fuel: 'Diesel',
            range: 7500,
            star: 5,
            price: 4000,
            type: 'Used car',
        },
        {
            id: 5,
            img: 'https://vnn-imgs-f.vgcloud.vn/2019/03/19/18/o-to-moi-5.jpg',
            nameCar: 'Infiniti Q60',
            description: 'Placlder text commonly used detrate',
            gear: 'automatic',
            fuel: 'Diesel',
            range: 7500,
            star: 5,
            price: 5000,
            type: 'New car',
        },
        {
            id: 6,
            img: 'https://vnn-imgs-f.vgcloud.vn/2019/03/19/18/o-to-moi-6.jpg',
            nameCar: 'Jaguar XJ',
            description: 'Placlder text commonly used detrate',
            gear: 'automatic',
            fuel: 'Diesel',
            range: 7500,
            star: 5,
            price: 3000,
            type: 'New car',
        },
        {
            id: 7,
            img: 'https://vnn-imgs-f.vgcloud.vn/2019/03/19/18/o-to-moi-7.jpg',
            nameCar: 'Lexus LC',
            description: 'Placlder text commonly used detrate',
            gear: 'automatic',
            fuel: 'Diesel',
            range: 7500,
            star: 5,
            price: 3000,
            type: 'Used car',
        },
        {
            id: 8,
            img: 'https://vnn-imgs-f.vgcloud.vn/2019/03/19/18/o-to-moi-8.jpg',
            nameCar: 'Mazda MX-5 Miata',
            description: 'Placlder text commonly used detrate',
            gear: 'automatic',
            fuel: 'Diesel',
            range: 7500,
            star: 5,
            price: 3900,
            type: 'New car',
        },
        {
            id: 9,
            img: 'https://vnn-imgs-f.vgcloud.vn/2019/03/19/18/o-to-moi-9.jpg',
            nameCar: 'Mercedes-Benz S-class Coupe',
            description: 'Placlder text commonly used detrate',
            gear: 'automatic',
            fuel: 'Diesel',
            range: 7500,
            star: 5,
            price: 4200,
            type: 'Used car',
        },
        {
            id: 10,
            img: 'https://vnn-imgs-f.vgcloud.vn/2019/03/19/18/o-to-moi-10.jpg',
            nameCar: 'Volvo V90',
            description: 'Placlder text commonly used detrate',
            gear: 'automatic',
            fuel: 'Diesel',
            range: 7500,
            star: 5,
            price: 3000,
            type: 'Used car',
        },
    ],
};

function ProminentCars() {
    const [carValue, setCarValue] = useState([]);

    const theme = useValueContext();

    useEffect(() => {
        // var carApi = 'http://localhost:3000/cars';
        // fetch(carApi)
        //     .then((res) => res.json())
        //     .then((res) => {
        //     });
        setCarValue(init.cars);
    }, []);

    return (
        <div className={cx('prominent-wrap')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('title', 'col', 'l-12')}>
                        <span>Latest Released Cars</span>
                        <h2>Our Prominent Cars</h2>
                        <div className={cx('btn-list')}>
                            <CarButton />
                        </div>
                    </div>
                </div>
                <div className={cx('row')}>
                    {carValue
                        .filter((data) => {
                            if (theme.carFilter.themeCar === 'All car') {
                                return true;
                            } else {
                                return data.type === theme.carFilter.themeCar;
                            }
                        })
                        .map((data) => (
                            <div key={data.id} className={cx('col', 'l-4')}>
                                <div className={cx('car-item')}>
                                    <a href="/">
                                        <div className={cx('thumbnail')}>
                                            <img src={data.img} alt="carImg" />
                                        </div>
                                    </a>
                                    <div className={cx('car-info')}>
                                        <h3>{data.nameCar}</h3>
                                        <a href="/">{data.description}</a>
                                        <div className={cx('car-parameters')}>
                                            <div>
                                                <FontAwesomeIcon icon={faGear} />
                                                <span>{data.gear}</span>
                                            </div>
                                            <div>
                                                <FontAwesomeIcon icon={faGasPump} />
                                                <span>{data.fuel}</span>
                                            </div>
                                            <div>
                                                <span className={cx('road')}>
                                                    <FontAwesomeIcon icon={faRoad} />
                                                </span>
                                                <span>{data.range} km</span>
                                            </div>
                                        </div>
                                        <div className={cx('car-assess')}>
                                            <div className={cx('star')}>
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                            <div className={cx('price')}>
                                                <span>Total Price : </span>
                                                <b> ${data.price}</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default ProminentCars;
