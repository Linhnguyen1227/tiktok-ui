import image from '~/assets/images';
import { forwardRef, useState } from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Image(
    { className, fallback: customFallback = image.noImage, alt, src, ...props },
    ref,
) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={cx(className, styles.wrapper)}
            ref={ref}
            {...props}
            src={fallback || src}
            alt={alt}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
