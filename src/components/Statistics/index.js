import styles from './Statistics.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Statistics() {
    return (
        <div className={cx('statistics-wrap')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('title')}>
                    <h1>YEAR STATISTICS</h1>
                    <p>
                        The parameters are accurate and always strictly controlled so that businesses can develop
                        strongly
                    </p>
                </div>
                <div className={cx('year', 'row')}>
                    <div className={cx('col', 'l-6')}>
                        <span>2021</span>
                    </div>
                    <div className={cx('col', 'l-6')}>
                        <span className={cx('right')}>2022</span>
                    </div>
                </div>
                <div className={cx('row', 'content')}>
                    <div className={cx('col', 'l-2')}>
                        <div className={cx('content-item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faUsers} />
                            <div className={cx('stats')}>
                                <div className={cx('stats-number')}>1642</div>
                                <div className={cx('stats-type')}>Clients</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col', 'l-8')}>
                        <div className={cx('stats-bar')}>
                            <span>+115%</span>
                            <div className={cx('percent-bar')}>
                                <div className={cx('percentage-left')} style={{ width: '31.7663%' }}></div>
                                <div
                                    className={cx('percentage-right')}
                                    style={{ width: '68.2337%', backgroundColor: '#31124b' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col', 'l-2')}>
                        <div className={cx('content-item')}>
                            <div className={cx('stats')}>
                                <div className={cx('stats-number')}>3527</div>
                                <div className={cx('stats-type')}>Clients</div>
                            </div>
                            <FontAwesomeIcon className={cx('icon')} icon={faUsers} />
                        </div>
                    </div>
                </div>
                <div className={cx('row', 'content')}>
                    <div className={cx('col', 'l-2')}>
                        <div className={cx('content-item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faUsers} />
                            <div className={cx('stats')}>
                                <div className={cx('stats-number')}>768</div>
                                <div className={cx('stats-type')}>Clients</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col', 'l-8')}>
                        <div className={cx('stats-bar')}>
                            <span>-81%</span>
                            <div className={cx('percent-bar')}>
                                <div className={cx('percentage-left')} style={{ width: '84.1183%' }}></div>
                                <div
                                    className={cx('percentage-right')}
                                    style={{ width: '15.8817%', backgroundColor: '#a95ce4' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col', 'l-2')}>
                        <div className={cx('content-item')}>
                            <div className={cx('stats')}>
                                <div className={cx('stats-number')}>145</div>
                                <div className={cx('stats-type')}>Clients</div>
                            </div>
                            <FontAwesomeIcon className={cx('icon')} icon={faUsers} />
                        </div>
                    </div>
                </div>
                <div className={cx('row', 'content')}>
                    <div className={cx('col', 'l-2')}>
                        <div className={cx('content-item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faUsers} />
                            <div className={cx('stats')}>
                                <div className={cx('stats-number')}>11546</div>
                                <div className={cx('stats-type')}>Clients</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col', 'l-8')}>
                        <div className={cx('stats-bar')}>
                            <span>-19%</span>
                            <div className={cx('percent-bar')}>
                                <div className={cx('percentage-left')} style={{ width: '55.3314%' }}></div>
                                <div
                                    className={cx('percentage-right')}
                                    style={{ width: '44.6686%', backgroundColor: '#ff0000' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col', 'l-2')}>
                        <div className={cx('content-item')}>
                            <div className={cx('stats')}>
                                <div className={cx('stats-number')}>9321</div>
                                <div className={cx('stats-type')}>Clients</div>
                            </div>
                            <FontAwesomeIcon className={cx('icon')} icon={faUsers} />
                        </div>
                    </div>
                </div>

                <div className={cx('row', 'content')}>
                    <div className={cx('col', 'l-2')}>
                        <div className={cx('content-item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faUsers} />
                            <div className={cx('stats')}>
                                <div className={cx('stats-number')}>3729</div>
                                <div className={cx('stats-type')}>Clients</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col', 'l-8')}>
                        <div className={cx('stats-bar')}>
                            <span>+367%</span>
                            <div className={cx('percent-bar')}>
                                <div className={cx('percentage-left')} style={{ width: '17.6245%' }}></div>
                                <div
                                    className={cx('percentage-right')}
                                    style={{ width: '82.3755%', backgroundColor: '#fa9e1b' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col', 'l-2')}>
                        <div className={cx('content-item')}>
                            <div className={cx('stats')}>
                                <div className={cx('stats-number')}>17429</div>
                                <div className={cx('stats-type')}>Clients</div>
                            </div>
                            <FontAwesomeIcon className={cx('icon')} icon={faUsers} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Statistics;
