import styles from './Blog.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Blog() {
    return (
        <div className={cx('blog-wrap')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-8', 'blog-dream')}>
                        <img src={images.blog} alt="" />
                    </div>
                    <div className={cx('col', 'l-4', 'archives')}>
                        <h3>Archives</h3>
                        <p>March 2017</p>
                        <p>April 2017</p>
                        <p>May 2021</p>
                        <p>January 2022</p>
                        <p>May 2022</p>
                    </div>
                </div>
                <div className={cx('row', 'blog-content')}>
                    <div className={cx('col', 'l-8', 'blog-post')}>
                        <ul>
                            <li>by Lore Papp</li>
                            <li>Uncategorized</li>
                            <li>3 Comments</li>
                        </ul>
                        <h3>Try these dream cars</h3>
                        <p>
                            Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet, pharetra
                            magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt
                            metus placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend dui
                            nunc, non fermentum qua.
                        </p>
                        <Link to="">READ MORE</Link>
                    </div>
                    <div className={cx('col', 'l-4', 'categories')}>
                        <h3>Categories</h3>
                        <p>Sport car</p>
                        <p>Family car</p>
                        <p>Most modern</p>
                        <p>Highlights and prevailing</p>
                        <p>Exotic Destinations</p>
                        <p>Uncategorized</p>
                        <p>Uncategorized</p>
                        <p>Uncategorized</p>
                    </div>
                </div>
                <div className={cx('row', 'blog-content')}>
                    <div className={cx('col', 'l-8', 'blog-post')}>
                        <ul>
                            <li>by Lore Papp</li>
                            <li>Uncategorized</li>
                            <li>3 Comments</li>
                        </ul>
                        <h3>Try these dream cars</h3>
                        <p>
                            Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet, pharetra
                            magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt
                            metus placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend dui
                            nunc, non fermentum qua.
                        </p>
                        <Link to="">READ MORE</Link>
                    </div>
                    <div className={cx('col', 'l-4', 'categories')}>
                        <h3>Instagram</h3>
                        <div className={cx('row', 'list-car')}>
                            <img className={cx('col', 'l-4')} src={images.car1} alt="" />
                            <img className={cx('col', 'l-4')} src={images.car2} alt="" />
                            <img className={cx('col', 'l-4')} src={images.car3} alt="" />
                        </div>
                        <div className={cx('row', 'list-car')}>
                            <img className={cx('col', 'l-4')} src={images.car4} alt="" />
                            <img className={cx('col', 'l-4')} src={images.car5} alt="" />
                            <img className={cx('col', 'l-4')} src={images.car6} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
