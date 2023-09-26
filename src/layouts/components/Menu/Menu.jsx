import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import MenuItem from './MenuItem.jsx';
import { useState } from 'react';
import Header from './Header.jsx';

const defaultFc = () => {};
const cx = classNames.bind(styles);

function Menu({
    children,
    items = [],
    hideOnClick = false,
    onChange = { defaultFc },
}) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItem = () => {
        return current.data.map((item, index) => {
            const isChildren = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (item.separate) {
                            item.separate = false;
                        }
                        if (isChildren) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    const handleResetPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    const renderMenu = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && (
                    <Header
                        title={current.title}
                        onBack={() => {
                            setHistory((prev) =>
                                prev.slice(0, prev.length - 1),
                            );
                        }}
                    />
                )}
                <div className={cx('menu-body')}>{renderItem()}</div>
            </PopperWrapper>
        </div>
    );
    return (
        <Tippy
            interactive={true}
            placement="bottom-end"
            delay={[0, 700]}
            hideOnClick={hideOnClick}
            onHide={handleResetPage}
            render={renderMenu}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
