import classNames from 'classnames/bind';
import styles from './MainHeader.module.css';
import { Link } from 'react-router-dom';
import Search from '../../Search';
import Cart from './components/Cart';
import User from './components/User';
import { useEffect, useState } from 'react';
import Wishlist from './components/Wishlist';
import { logoAPI } from '~/api';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function MainHeader() {
	
	const [logo, setLogo] = useState('')
	const orderNumber = useSelector((state) => state.cart.orderNumber)

	useEffect(() => {
		logoAPI().then(res => setLogo(res))
	}, [])

	return ( 
		<div className={cx('main-header')}>
			<div className={cx('inner', 'global-inner')}>
					<div className={cx('logo')}>
						<Link to='/'><img width={150} height={27} src={logo} alt="Logo" /></Link>
					</div>
					
					<Search />

					<div className={cx('manage')}>
						<ul>
							<li><User/></li>
							<Wishlist />
							<Cart />
						</ul>
					</div>
			</div>
		</div>
	);
}

export default MainHeader;