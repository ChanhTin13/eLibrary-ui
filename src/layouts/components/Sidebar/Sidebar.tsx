import React, { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Sidebar.module.scss';
import Image from '~/components/Images';
import MenuChild from './MenuChild';
import config from '~/config';
import images from '~/asset/images';
import { navigation } from '~/data/data';
import { SideBarContext } from '~/contexts/SideBarContext';
import { PopperWrapper } from '~/components/Custom/Popper';

const cx = classNames.bind(styles);

function Sidebar() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [menu, setMenu] = useState<{ activeNum: number; code: string }>({ activeNum: 0, code: 'home' });
    const sideBarContext = useContext(SideBarContext);
    if (!sideBarContext) {
        // Handle the case when the context is not yet available
        return null;
    }
    const { isOpen } = sideBarContext;

    const handleIconHover = (index: number) => {
        setHoveredIndex(index);
    };
    const handleIconLeave = () => {
        setHoveredIndex(null);
    };
    const handleActionClick = (activeNum: number, code: string) => {
        setMenu({ activeNum, code });
    };
    const renderResult = (attrs: Record<string, any>, code: string) => (
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
                                        hideOnClick={false}
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
                                <li key={index}>
                                    <div
                                        className={cx('li-icon', menu.activeNum === index ? 'li-active' : null)}
                                        onClick={() => handleActionClick(index, nav.code)}
                                        role="button"
                                        aria-label={nav.code}
                                    >
                                        <b className={cx('b-false')}></b>
                                        <b></b>
                                        <button className={cx('icon-btn')} aria-label={nav.code}>
                                            <div aria-hidden="true">{nav.icon}</div>
                                        </button>
                                    </div>
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
                                    src={images.logoWallPaper}
                                    alt="eLibrary"
                                    //loading="lazy"
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
