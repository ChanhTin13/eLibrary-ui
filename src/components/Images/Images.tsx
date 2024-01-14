import React, { useState, forwardRef, ImgHTMLAttributes } from 'react';
import classNames from 'classnames';
import images from '~/asset/images';
import styles from './Image.module.scss';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src?: string;
    alt?: string;
    className?: string;
    fallback?: string;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
    ({ src, alt, className, fallback: customFallback = images.defaultUser, ...props }, ref) => {
        const [fallback, setFallback] = useState('');

        const handleError = () => {
            setFallback(customFallback);
        };

        return (
            <img
                className={classNames(styles.wrapper, className)}
                ref={ref}
                src={fallback || src}
                alt={alt}
                {...props}
                onError={handleError}
            />
        );
    },
);

export default Image;
