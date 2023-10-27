import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('header-logo')}>
                <a href="/" className={cx('logo-container')}>
                    <img
                        className={cx('logo-img')}
                        src="https://edugo.monamedia.net/images/logo-2.jpg"
                        alt="eLibrary"
                    ></img>
                </a>
            </div>
            <div className={cx('header-inner')}>
                <div className={cx('icon-close-open-sidebar')}>
                    <div className={cx('icon-action')}>
                        <span role="img" aria-label="menu-fold" color="#002456" className={cx('icon-close')}>
                            <svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="menu-fold"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"></path>
                            </svg>
                        </span>
                        <span role="img" aria-label="menu-unfold" color="#002456" className={cx('icon-open')}>
                            <svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="menu-unfold"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"></path>
                            </svg>
                        </span>
                    </div>
                </div>

                <div className={cx('header-inner-item')}>
                    <button className={cx('bell-btn')}>
                        <FontAwesomeIcon className={cx('shaking')} icon={faBell} />
                    </button>
                    <div className={cx('user-wrap')}>
                        <div className={cx('user-img')}>
                            <img
                                draggable="false"
                                alt="avatar"
                                src="http://monalms.monamedia.net/Upload/Images/d806637d-4ca3-486f-a349-64fc7ab8b395.jpg"
                                className={cx('img')}
                            ></img>
                        </div>
                        <div className={cx('user-info')}>
                            <p className={cx('user-name')}>Tên </p>
                            <p className={cx('user-position')}>Chức vụ</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
