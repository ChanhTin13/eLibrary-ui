import classNames from 'classnames/bind';
import Button from '~/components/Custom/Button';
import styles from './Action.module.scss';

const cx = classNames.bind(styles);

function ActionItem({ data }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} iconColor={data.iconColor}>
            {data.title}
        </Button>
    );
}

export default ActionItem;
