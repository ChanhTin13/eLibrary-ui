import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

interface PopperWrapperProps {
    children: ReactNode;
    className?: string;
    arrow?: string;
}

const PopperWrapper: React.FC<PopperWrapperProps> = ({ children, className, arrow }) => {
    const wrapperClassName = cx('wrapper', className, !!arrow && 'arrow', arrow);
    return <div className={wrapperClassName}>{children}</div>;
};

export default PopperWrapper;
