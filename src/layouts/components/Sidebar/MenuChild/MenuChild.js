import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './MenuChild.module.scss';
import { MENU_CHILD } from '~/data/data';
import ChildItem from '../ChildItem';

const cx = classNames.bind(styles);
function MenuChild({ code }) {
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
}
MenuChild.propTypes = {
    code: PropTypes.string.isRequired,
};

export default MenuChild;
