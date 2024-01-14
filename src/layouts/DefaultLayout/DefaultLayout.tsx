import React, { useContext, ReactNode } from 'react';
import classNames from 'classnames/bind';
import Sidebar from '~/layouts/components/Sidebar';
import Header from '~/layouts/components/Header';
import styles from './DefaultLayout.module.scss';
import { SideBarContext } from '~/contexts/SideBarContext';

const cx = classNames.bind(styles);

interface DefaultLayoutProps {
    children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    const sideBarContext = useContext(SideBarContext);
    if (!sideBarContext) {
        // Handle the case when the context is not yet available
        return null;
    }
    // Access properties from the context
    const { isOpen } = sideBarContext;

    return (
        <div className={cx('wrapper')}>
            <Header />
            <Sidebar />
            <div className={cx('right-content', isOpen ? '' : 'content-max-width')}>
                <div className={cx('main-content')}>{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
export type { DefaultLayoutProps };
