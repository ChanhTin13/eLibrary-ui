import React, { useState, ReactNode, MouseEvent } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import PopUp from '~/components/PopUp';

const cx = classNames.bind(styles);

interface ButtonProps {
    popupContent?: ReactNode; // PopUp
    to?: string;
    href?: string;
    primary?: boolean;
    outline?: boolean;
    text?: boolean;
    rounded?: boolean;
    disabled?: boolean;
    small?: boolean;
    large?: boolean;
    children: ReactNode;
    className?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    iconColor?: string;
    onClick?: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
    popupContent,
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    iconColor,
    onClick,
    ...passProps
}) => {
    let Comp: React.ElementType = 'button';
    const props = {
        to,
        href,
        onClick,
        ...passProps,
    };

    // handle PopUp
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleButtonClick = () => {
        setPopupOpen(!isPopupOpen);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };
    // Define a type guard for the 'on' properties
    function isFunctionProperty(key: string, value: any): value is Function {
        return key.startsWith('on') && typeof value === 'function';
    }
    // Remove event listener when btn is disabled
    if (disabled) {
        Object.entries(props).forEach(([key, value]) => {
            if (isFunctionProperty(key, value)) {
                // Use type assertion here
                delete (props as { [key: string]: any })[key];
            }
        });
    }
    // if there is PopUp, remove all href
    if (popupContent) {
        Comp = 'div';
        props.onClick = handleButtonClick;
    } else {
        if (to) {
            props.to = to;
            Comp = Link;
        } else if (href) {
            props.href = href;
            Comp = 'a';
        }
    }
    const classes = cx('wrapper', {
        [className!]: className,
        primary,
        outline,
        text,
        rounded,
        disabled,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props} {...(Comp === 'a' && { href, target: '_blank' })}>
            {leftIcon && (
                <span className={cx('icon')} style={{ color: iconColor }}>
                    {leftIcon}
                </span>
            )}
            <span className={cx('title')}>{children}</span>
            {rightIcon && (
                <span className={cx('icon')} style={{ color: iconColor }}>
                    {rightIcon}
                </span>
            )}
            {popupContent && isPopupOpen && <PopUp children={popupContent} onClose={handleClosePopup} />}
        </Comp>
    );
};

export default Button;
