import React from 'react';
import classNames from 'classnames/bind';
import styles from './ChildItem.module.scss';

const cx = classNames.bind(styles);

interface ChildItemProps {
    item: {
        name: string;
        child: {
            name: string;
            action: string;
        }[];
    };
}

const ChildItem: React.FC<ChildItemProps> = ({ item }) => {
    return (
        <div>
            <div className={cx('element-title')}>{item.name}</div>
            <ul className={cx('group-list')}>
                {item.child.map((child, index) => (
                    <li key={index} className={cx('group-child')}>
                        <a href={child.action}>
                            <div>{child.name}</div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChildItem;
