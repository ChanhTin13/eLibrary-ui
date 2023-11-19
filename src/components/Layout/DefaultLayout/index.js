import Sidebar from '~/components/Layout/LayoutComponents/Sidebar';
import Header from '~/components/Layout/LayoutComponents/Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { useContext } from 'react';
import { SideBarContext } from '~/Context/SideBarContext';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    const { toggle } = useContext(SideBarContext);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Sidebar />
            <div className={cx('right-content', toggle ? '' : 'content-max-width')}>
                <div className={cx('main-content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
