import classNames from 'classnames/bind';
import Button from '~/components/Custom/Button';
import styles from './Action.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function ActionItem({ data }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} iconColor={data.iconColor}>
            {data.title}
        </Button>
    );
}
ActionItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ActionItem;
