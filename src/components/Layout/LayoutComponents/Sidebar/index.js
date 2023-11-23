import React, { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Image from '~/components/Images';
import { SideBarContext } from '~/Context/SideBarContext';
import { navigation } from '~/data/data';
import MenuChild from './MenuChild';
import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
    const { toggle } = useContext(SideBarContext);
    const [active, setActive] = useState(0);
    const [code, setCode] = useState('home');

    const handleActionClick = (num, code) => {
        setActive(num);
        setCode(code);
    };

    return (
        <aside className={cx('sidebar')}>
            {console.log('b' + toggle)}
            <div className={cx('menu-parent')}>
                <div className={cx('menu-parent-logo')}></div>
                <div className={cx('menu-parent-body')}>
                    <ul className={cx('list-menu')}>
                        {navigation.map(
                            (nav, index) =>
                                nav.icon && (
                                    <li
                                        key={index}
                                        className={cx('li-icon', active === index ? 'li-active' : null)}
                                        onClick={() => handleActionClick(index, nav.code)}
                                    >
                                        <b className={cx('b-false')}></b>
                                        <b></b>
                                        <button className={cx('icon-btn')}>{nav.icon}</button>
                                    </li>
                                ),
                        )}
                    </ul>
                </div>
            </div>
            <div className={cx('menu-child', toggle ? '' : 'hidden')}>
                <div className={cx('header-logo')}>
                    <a href={config.routes.home} className={cx('logo-container')}>
                        <Image
                            className={cx('logo-img')}
                            src="https://wallpaperaccess.com/full/296819.jpg"
                            alt="eLibrary"
                        />
                    </a>
                </div>

                <MenuChild code={code} />
            </div>
        </aside>
    );
}

export default Sidebar;
