import classNames from 'classnames/bind';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '~/layouts/components/Sidebar';
import Header from '~/layouts/components/Header';
import styles from './DefaultLayout.module.scss';
import { SideBarContext } from '~/contexts/SideBarContext';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    const { isOpen } = useContext(SideBarContext);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Sidebar />
            <div className={cx('right-content', isOpen ? '' : 'content-max-width')}>
                <div className={cx('main-content')}>{children}</div>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
