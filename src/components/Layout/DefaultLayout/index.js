import Sidebar from '~/components/Layout/layoutComponents/Sidebar';
import Header from '~/components/Layout/layoutComponents/Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Sidebar />
            <div className={cx('right-content')}>
                <div className={cx('main-content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
