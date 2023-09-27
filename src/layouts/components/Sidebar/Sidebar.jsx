import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    FollowingIcon,
    FollwingActiveIcon,
    ExploreIcon,
    ExploreActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '../Icon';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For you"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    iconActive={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowingIcon />}
                    iconActive={<FollwingActiveIcon />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<ExploreIcon />}
                    iconActive={<ExploreActiveIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    iconActive={<LiveIcon />}
                    icon={<LiveActiveIcon />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
