import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { PopperWrapper } from '~/components/Custom/Popper';
import ActionItem from './ActionItem';
import styles from './Action.module.scss';

const cx = classNames.bind(styles);
function UserAction({ children, items = [], hideOnClick = true }) {
    const renderItems = () => {
        return items.map((item, index) => <ActionItem key={index} data={item} />);
    };
    const renderResult = (attrs) => (
        <div className={cx('menu-list')} {...attrs}>
            <PopperWrapper className={cx('menu-popper')} arrow="top">
                {renderItems()}
            </PopperWrapper>
        </div>
    );

    return (
        <Tippy interactive trigger="click" hideOnClick={hideOnClick} render={renderResult}>
            {children}
        </Tippy>
    );
}
UserAction.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
};

export default UserAction;
