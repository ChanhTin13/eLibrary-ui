import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);
function Card({
    className,
    icon = <FontAwesomeIcon icon={faCog} />,
    iconColor = 'blue',
    textContent = 'Nội dung',
    numberContent = 0,
    ...passProps
}) {
    const props = {
        ...passProps,
    };
    const classes = cx('wrapper', {
        [className]: className,
    });
    return (
        <div className={classes} {...props}>
            <div className={cx('content')}>
                <span className={cx('icon')} style={{ backgroundColor: iconColor }}>
                    {icon}
                </span>
                <div className={cx('text-area')}>
                    <div className="text-content">{textContent}</div>
                    <div className="number-content">{numberContent}</div>
                </div>
            </div>
        </div>
    );
}
Card.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.node,
    iconColor: PropTypes.string,
    textContent: PropTypes.string,
    numberContent: PropTypes.number,
};

export default Card;
