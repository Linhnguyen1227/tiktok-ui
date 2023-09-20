import classNames from 'classnames/bind';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button(
    {
        to,
        href,
        primary = false,
        outline = false,
        text = false,
        small = false,
        medium = false,
        large = false,
        rounded = false,
        disabled = false,
        iconleft,
        iconright,
        children,
        className,
        onClick,
        ...passprops
    },
    ref,
) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passprops,
    };

    if (disabled) {
        // delete props.onClick;
        //Or
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on')) {
                delete props[key];
            }
        });
    }

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        small,
        medium,
        large,
        rounded,
        disabled,
    });
    return (
        <Comp className={classes} {...props} ref={ref}>
            {iconleft && <span className={cx('icon')}>{iconleft}</span>}
            <span className={cx('title')}>{children}</span>
            {iconright && <span className={cx('icon')}>{iconright}</span>}
        </Comp>
    );
}

export default forwardRef(Button);
