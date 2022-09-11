import styles from './Introduce.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '../Button';

const cx = classNames.bind(styles);

function Introduce() {
    return (
        <div className={cx('introduce-wrap')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-6')}>
                        <img src={images.carBgWhite} alt="" />
                    </div>
                    <div className={cx('col', 'l-6', 'text')}>
                        <h1>WE HAVE THE BEST CARS</h1>
                        <p>
                            With high quality criteria, We always choose the strict cars with the best production
                            materials, always achieve certificates of quality car quality so we always bring customers
                            the best cars. In addition, we also appreciate modern technology, luxurious designs, and
                            durable engines of the car With high quality criteria, We always choose the strict cars with
                            the best production materials, always achieve certificates of quality car quality so we
                            always bring customers the best cars. In addition, we also appreciate modern technology,
                            luxurious designs, and durable engines of the car
                        </p>
                        <Button primary large>
                            See more . . .
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduce;
