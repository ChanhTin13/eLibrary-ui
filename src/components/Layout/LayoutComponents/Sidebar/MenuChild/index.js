import classNames from 'classnames/bind';
import styles from './MenuChild.module.scss';
import { MENU_CHILD } from '~/data/data';

const cx = classNames.bind(styles);
function MenuChild({ code }) {
    const items = MENU_CHILD.filter((item) => item.code === code);
    return (
        <div className={cx('menu-child-body')}>
            <div className={cx('menu-child-body-element')}>
                {items.map((item, index) => (
                    <div key={index}>
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
                ))}
            </div>
        </div>
    );
}

export default MenuChild;
