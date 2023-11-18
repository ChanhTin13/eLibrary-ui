import React, { useContext } from 'react';
import { SideBarContext } from '~/Context/SideBarContext';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faCircleQuestion, faEarthAsia, faKeyboard, faUser } from '@fortawesome/free-solid-svg-icons';
import UserAction from '~/components/Custom/Popper/UserAction';
import { CloseSidebarIcon, OpenSidebarIcon } from '~/components/Icons';
import Image from '~/components/Images';

const cx = classNames.bind(styles);

function Header() {
    const context = useContext(SideBarContext);
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'Tiếng Việt',
            iconColor: '#000',
        },
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Thông tin',
            iconColor: '#0088cc',
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Đổi mật khẩu',
            to: '/feedback',
            iconColor: '#10ca93',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Đăng xuất',
            iconColor: '#e04f5f',
        },
    ];
    return (
        <header className={cx('header')}>
            {console.log('2')}
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
