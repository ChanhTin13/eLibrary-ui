import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ChildItem.module.scss';

const cx = classNames.bind(styles);
function ChildItem({ item }) {
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
}
ChildItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default ChildItem;
