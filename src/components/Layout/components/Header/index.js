import styles from './Header.module.css';
import classNames from 'classnames/bind';
import Logo from '../Logo';
import Search from '../Search';
import CartButton from '../Cartbutton';

const cx = classNames.bind(styles);

function Header() {
	return ( 
		<header className={cx('wrapper')}>
			<div className={cx('inner', 'global-inner')}>
				<Logo />
				<Search />
				<CartButton />
			</div>
		</header>
	);
}

export default Header;