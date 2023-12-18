import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function PopperWrapper({ children, className, arrow }) {
    const wrapperClassName = cx('wrapper', className, !!arrow && 'arrow', arrow);
    return <div className={wrapperClassName}>{children}</div>;
}
PopperWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    arrow: PropTypes.string,
};

export default PopperWrapper;
