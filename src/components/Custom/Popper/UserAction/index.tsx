import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { PopperWrapper } from '~/components/Custom/Popper';
import ActionItem from './ActionItem';
import styles from './Action.module.scss';

const cx = classNames.bind(styles);
interface MenuItem {
    icon: React.ReactNode;
    to?: string; // Make 'to' property optional
    iconColor: string;
    title: string;
}
interface UserActionProps {
    children: ReactNode;
    items?: MenuItem[];
    hideOnClick?: boolean;
}

const UserAction: React.FC<UserActionProps> = ({ children, items = [], hideOnClick = true }) => {
    const renderItems = () => {
        return items.map((item, index) => <ActionItem key={index} data={item} />);
    };

    const renderResult = (attrs: Record<string, any>) => (
        <div className={cx('menu-list')} {...attrs}>
            <PopperWrapper className={cx('menu-popper')} arrow="top">
                {renderItems()}
            </PopperWrapper>
        </div>
    );

    return (
        <Tippy interactive trigger="click" hideOnClick={hideOnClick} render={renderResult}>
            {children as React.ReactElement}
        </Tippy>
    );
};

export default UserAction;
