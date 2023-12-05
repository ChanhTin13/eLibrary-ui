import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './PopUp.module.scss';
import grids from '~/grid/Grid.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const grid = classNames.bind(grids);
const cx = classNames.bind(styles);
function PopUp({ children, onClose }) {
    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div ref={popupRef} className={cx('wrapper')}>
            <div className={grid('grid')}>
                <div className={grid('row')}>
                    <div className={grid('col', 'l-6', 'l-o-3', 'm-8', 'm-o-2', 'c-8', 'c-o-2')}>
                        <div className={cx('content')}>
                            <button className={cx('close-button')} onClick={onClose}>
                                <span className={cx('close-icon')}>
                                    <FontAwesomeIcon icon={faX} />
                                </span>
                            </button>
                            <div className={cx('children-container')}>{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
PopUp.propTypes = {
    children: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};
export default PopUp;
