// Card.tsx
import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);

interface CardProps {
    className?: string;
    icon?: ReactNode;
    iconColor?: string;
    textContent?: string;
    numberContent?: number;
}

const Card: React.FC<CardProps> = ({
    className,
    icon = <FontAwesomeIcon icon={faCog} />,
    iconColor = 'blue',
    textContent = 'Nội dung',
    numberContent = 0,
    ...passProps
}) => {
    const props = {
        ...passProps,
    };

    const classes = cx('wrapper', {
        [className!]: className,
    });

    return (
        <div className={classes} {...props}>
            <div className={cx('content')}>
                <span className={cx('icon')} style={{ backgroundColor: iconColor }}>
                    {icon}
                </span>
                <div className={cx('text-area')}>
                    <div className="text-content">{textContent}</div>
                    <div className="number-content">{numberContent}</div>
                </div>
            </div>
        </div>
    );
};

export default Card;
