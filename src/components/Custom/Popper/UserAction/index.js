import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { PopperWrapper } from '~/components/Custom/Popper';
import ActionItem from './ActionItem';
import styles from './Action.module.scss';

const cx = classNames.bind(styles);

function UserAction({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <ActionItem key={index} data={item} />);
    };

    return (
        <Tippy
            interactive
            trigger="click"
            hideOnClick={true}
            render={(attrs) => (
                <div className={cx('menu-list')} {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default UserAction;
