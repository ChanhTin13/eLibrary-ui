import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

import { CloseSidebarIcon, OpenSidebarIcon } from '~/components/Icons';
import { SideBarContext } from '~/contexts/SideBarContext';
import styles from './Header.module.scss';
import UserAction from '~/components/Custom/Popper/UserAction';
import Image from '~/components/Images';
import { MENU_ITEMS } from '~/data/data';

const cx = classNames.bind(styles);
function Header() {
    const context = useContext(SideBarContext);

    return (
        <header className={cx('header')}>
            <div className={cx('header-inner', context.toggle ? '' : 'inner-max-width')}>
                <div className={cx('icon-close-open-sidebar')}>
                    {/* handle click */}
                    <div className={cx('icon-action')} onClick={context.handleSideBar}>
                        <span>{context.toggle ? <CloseSidebarIcon /> : <OpenSidebarIcon />}</span>
                    </div>
                </div>

                <div className={cx('header-inner-item')}>
                    <button className={cx('bell-btn')}>
                        <FontAwesomeIcon className={cx('shaking')} icon={faBell} />
                    </button>

                    <UserAction items={MENU_ITEMS}>
                        <div className={cx('user-wrap')}>
                            <div className={cx('user-img')}>
                                <Image
                                    draggable="false"
                                    alt="avatar"
                                    src="http://monalms.monamedia.net/Upload/Images/d806637d-4ca3-486f-a349-64fc7ab8b395.jpg"
                                    className={cx('img')}
                                />
                            </div>
                            <div className={cx('user-info')}>
                                <p className={cx('user-name')}>Tên </p>
                                <p className={cx('user-position')}>Chức vụ</p>
                            </div>
                        </div>
                    </UserAction>
                </div>
            </div>
        </header>
    );
}

export default Header;
