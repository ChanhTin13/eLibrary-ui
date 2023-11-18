import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Images';
import { SideBarContext } from '~/Context/SideBarContext';

const cx = classNames.bind(styles);

function Sidebar() {
    const { toggle } = useContext(SideBarContext);

    return (
        <aside className={cx('sidebar')}>
            {console.log('b' + toggle)}
            <div className={cx('menu-parent')}>
                <div className={cx('menu-parent-logo')}></div>
                <div className={cx('menu-parent-body')}>
                    <ul className={cx('list-menu')}>
                        <li className={cx('li-icon', 'li-active')}>
                            <b className={cx('b-false')}></b>
                            <b className={cx('b-false')}></b>
                            <button className={cx('icon-btn')}>
                                <FontAwesomeIcon icon={faHouse} />
                            </button>
                        </li>
                        <li className={cx('li-icon')}>
                            <b className={cx('b-false')}></b>
                            <b className={cx('b-false')}></b>
                            <button className={cx('icon-btn')}>
                                <FontAwesomeIcon icon={faHouse} />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('menu-child', toggle ? '' : 'hidden')}>
                <div className={cx('header-logo')}>
                    <a href="/" className={cx('logo-container')}>
                        <Image
                            className={cx('logo-img')}
                            src="https://wallpaperaccess.com/full/296819.jpg"
                            alt="eLibrary"
                        />
                    </a>
                </div>
                <div className={cx('menu-child-body')}>
                    <div className={cx('menu-child-body-element')}>
                        {/* <ul className={cx('menu-child-body-element-ul')}> */}
                        <div className={cx('element-title')}>Quản lý hệ thống</div>
                        <ul className={cx('group-list')}>
                            <li className={cx('group-child')}>
                                <a href="/">
                                    <div>Tin tức</div>
                                </a>
                            </li>
                            <li className={cx('group-child')}>
                                <a href="/">
                                    <div>Truyền thông</div>
                                </a>
                            </li>
                        </ul>
                        {/* </ul> */}
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
