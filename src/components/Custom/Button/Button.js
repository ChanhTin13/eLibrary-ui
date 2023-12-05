import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import { useState } from 'react';
import PopUp from '~/components/PopUp';

const cx = classNames.bind(styles);
function Button({
    popupContent, //PopUp
    to,
    href,
    primary = false, //nút chính
    outline = false, // nút outline
    text = false, // nút khi hover thì underline text
    rounded = false, // nút tròn
    //
    disabled = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    iconColor, //icon color
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
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
    //

    // Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
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
        [className]: className,
        primary,
        outline,
        text,
        rounded,
        disabled,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props} {...(props.href && { target: '_blank' })}>
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
}

Button.propTypes = {
    popupContent: PropTypes.node, // PopUp
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    //
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    iconColor: PropTypes.string,
    //
    onClick: PropTypes.func,
};

export default Button;
