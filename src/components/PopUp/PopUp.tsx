import React, { useRef, useEffect, ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './PopUp.module.scss';
import grids from '~/grid/Grid.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const grid = classNames.bind(grids);
const cx = classNames.bind(styles);

interface PopUpProps {
    children: ReactNode;
    onClose: () => void;
}

function PopUp({ children, onClose }: PopUpProps) {
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
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
                                    <FontAwesomeIcon icon={faTimes} />
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

export default PopUp;
