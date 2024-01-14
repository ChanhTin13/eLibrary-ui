import React from 'react';
import classNames from 'classnames/bind';
import styles from './MenuChild.module.scss';
import { MENU_CHILD } from '~/data/data';
import ChildItem from '../ChildItem';

const cx = classNames.bind(styles);

interface MenuChildProps {
    code: string;
}

const MenuChild: React.FC<MenuChildProps> = ({ code }) => {
    const items = MENU_CHILD.filter((item) => item.code === code);

    return (
        <div className={cx('menu-child-body')}>
            <div className={cx('menu-child-body-element')}>
                {items.map((item, index) => (
                    <ChildItem item={item} key={index} />
                ))}
            </div>
        </div>
    );
};

export default MenuChild;
