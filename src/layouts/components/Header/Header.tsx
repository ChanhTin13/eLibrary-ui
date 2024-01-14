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
import images from '~/asset/images';

const cx = classNames.bind(styles);
function Header() {
    const sideBarContext = useContext(SideBarContext);
    if (!sideBarContext) {
        // Handle the case when the context is not yet available
        return null;
    }
    const { isOpen, handleSideBar } = sideBarContext;
    return (
        <header className={cx('header')}>
            <div className={cx('header-inner', isOpen ? '' : 'inner-max-width')}>
                <div className={cx('icon-close-open-sidebar')}>
                    {/* handle click */}
                    <div className={cx('icon-action')} onClick={handleSideBar}>
                        <span>{isOpen ? <CloseSidebarIcon /> : <OpenSidebarIcon />}</span>
                    </div>
                </div>

                <div className={cx('header-inner-item')}>
                    <button className={cx('bell-btn')} aria-label="notification">
                        <FontAwesomeIcon className={cx('shaking')} icon={faBell} />
                    </button>

                    <UserAction items={MENU_ITEMS}>
                        <div className={cx('user-wrap')} role="button" aria-expanded="true">
                            <div className={cx('user-img')}>
                                <Image draggable="false" alt="avatar" src={images.userAvata} className={cx('img')} />
                            </div>
                            <div className={cx('user-info')}>
                                <p className={cx('user-name')} role="paragraph">
                                    Tên{' '}
                                </p>
                                <p className={cx('user-position')} role="paragraph">
                                    Chức vụ
                                </p>
                            </div>
                        </div>
                    </UserAction>
                </div>
            </div>
        </header>
    );
}

export default Header;
