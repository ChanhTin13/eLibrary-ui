import React, { Fragment, useContext, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Sidebar.module.scss';
import Image from '~/components/Images';
import { SideBarContext } from '~/contexts/SideBarContext';
import { navigation } from '~/data/data';
import MenuChild from './MenuChild';
import config from '~/config';
import { PopperWrapper } from '~/components/Custom/Popper';

const cx = classNames.bind(styles);

function Sidebar() {
    const { isOpen } = useContext(SideBarContext);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [menu, setMenu] = useState({ activeNum: 0, code: 'home' });

    const handleIconHover = (index) => {
        setHoveredIndex(index);
    };
    const handleIconLeave = () => {
        setHoveredIndex(null);
    };
    const handleActionClick = (activeNum, code) => {
        setMenu({ activeNum, code });
    };
    const renderResult = (attrs, code) => (
        <PopperWrapper className={cx('menu-hover')} {...attrs}>
            <MenuChild code={code} />
        </PopperWrapper>
    );

    return (
        <aside className={cx('sidebar')}>
            <div className={cx('menu-parent')}>
                <div className={cx('menu-parent-logo')}></div>
                <div className={cx('menu-parent-body')}>
                    <ul className={cx('list-menu')}>
                        {navigation.map((nav, index) =>
                            nav.icon && !isOpen ? (
                                <li key={index}>
                                    <Tippy
                                        interactive
                                        placement="right"
                                        render={(attrs) => renderResult(attrs, nav.code)}
                                        delay={[0, 50]}
                                    >
                                        <div
                                            className={cx('li-icon', hoveredIndex === index ? 'li-active' : null)}
                                            onMouseEnter={() => handleIconHover(index)}
                                            onMouseLeave={handleIconLeave}
                                            role="button"
                                            aria-label={nav.code}
                                        >
                                            <b className={cx('b-false')}></b>
                                            <b></b>
                                            <button className={cx('icon-btn')} aria-label={nav.code}>
                                                <div aria-hidden="true">{nav.icon}</div>
                                            </button>
                                        </div>
                                    </Tippy>
                                </li>
                            ) : (
                                <li
                                    key={index}
                                    className={cx('li-icon', menu.activeNum === index ? 'li-active' : null)}
                                    onClick={() => handleActionClick(index, nav.code)}
                                >
                                    <b className={cx('b-false')}></b>
                                    <b></b>
                                    <button className={cx('icon-btn')} aria-label={nav.code}>
                                        <div aria-hidden="true">{nav.icon}</div>
                                    </button>
                                </li>
                            ),
                        )}
                    </ul>
                </div>
            </div>

            <div className={cx('menu-child', isOpen ? '' : 'hidden')}>
                {isOpen && (
                    <>
                        <div className={cx('header-logo')}>
                            <a href={config.routes.home} className={cx('logo-container')}>
                                <Image
                                    className={cx('logo-img')}
                                    src="https://wallpaperaccess.com/full/296819.jpg"
                                    alt="eLibrary"
                                />
                            </a>
                        </div>

                        <MenuChild code={menu.code} />
                    </>
                )}
            </div>
        </aside>
    );
}

export default Sidebar;
