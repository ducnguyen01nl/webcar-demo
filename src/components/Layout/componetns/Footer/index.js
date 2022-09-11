import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faEnvelope, faLocationDot, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-4')}>
                        <div className={cx('contact')}>
                            <h3>Contact Us</h3>
                            <p>
                                There are many variations of passaes of arem ipsum available, but the majority have in
                                some form by ipsum
                            </p>
                            <div className={cx('contact-list')}>
                                <div className={cx('contact-item')}>
                                    <FontAwesomeIcon className={cx('contact-icon', 'phone')} icon={faPhoneFlip} />
                                    <div>
                                        <p>Phone number</p>
                                        <a href="/">+327432001</a>
                                    </div>
                                </div>
                                <div className={cx('contact-item')}>
                                    <FontAwesomeIcon className={cx('contact-icon', 'mail')} icon={faEnvelope} />
                                    <div>
                                        <p>Email address</p>
                                        <a href="/">ducnguyen01nl@gmail.com</a>
                                    </div>
                                </div>
                                <div className={cx('contact-item')}>
                                    <FontAwesomeIcon className={cx('contact-icon', 'map')} icon={faLocationDot} />
                                    <div>
                                        <p>Address</p>
                                        <a href="/">Bac Ninh, Viet Nam</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col', 'l-8')}>
                        <div className={cx('footer-right')}>
                            <div className={cx('row')}>
                                <div className={cx('col', 'l-3')}>
                                    <div className={cx('ourInfo')}>
                                        <h3>Our Info</h3>
                                        <a href="/">About Us</a>
                                        <a href="/">Our Service</a>
                                        <a href="/">Our Shop</a>
                                        <a href="/">Blog</a>
                                        <a href="/">Contact</a>
                                    </div>
                                </div>
                                <div className={cx('col', 'l-3')}>
                                    <div className={cx('quickLink')}>
                                        <h3>Quick Link</h3>
                                        <a href="/">About Us</a>
                                        <a href="/">Our Service</a>
                                        <a href="/">Our Shop</a>
                                        <a href="/">Blog</a>
                                        <a href="/">Contact</a>
                                    </div>
                                </div>
                                <div className={cx('col', 'l-6')}>
                                    <div className={cx('subcribeUs')}>
                                        <h3>Subscribe Us</h3>
                                        <form className={cx('form')} action="#">
                                            <input type="text" placeholder="Your Email..." />
                                            <button>
                                                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('row')}>
                                <div className={cx('card')}>
                                    <div className={cx('col', 'l-6')}>
                                        <p>We know that honesty and transparency friendly customer service</p>
                                    </div>
                                    <div className={cx('col', 'l-6')}>
                                        <img src={images.card} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer-bottom')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <p>Copyright © 2021. All rights reserved. by Business-theme</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
