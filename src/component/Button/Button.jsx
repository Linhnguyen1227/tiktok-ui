import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
// import { forwardRef } from 'react';

const cx = classNames.bind(styles);
function Button({
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
}) {
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
        <Comp className={classes} {...props}>
            {iconleft && <span className={cx('icon')}>{iconleft}</span>}
            <span className={cx('title')}>{children}</span>
            {iconright && <span className={cx('icon')}>{iconright}</span>}
        </Comp>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    iconleft: PropTypes.node,
    iconright: PropTypes.node,
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
};
export default Button;
