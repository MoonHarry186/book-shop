import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from './MainHeader.module.css';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Search from '../../Search';
import Cart from './components/Cart';
import User from './components/User';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function MainHeader() {
	
	const [logo, setLogo] = useState('')

	useEffect(() => {
		fetch('http://72.arrowhitech.net/tn1/harry-moon/wordpress/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: `
					{
						mediaItems (where: {title: "logo"}) {
							edges {
								node {
									sourceUrl
								}
							}
						}
					}
				`,
			}),
		})
  .then(res => res.json())
  .then(res => {
		setLogo(res.data.mediaItems.edges[0].node.sourceUrl)
	})
	}, [])

	return ( 
		<div className={cx('main-header')}>
			<div className={cx('inner', 'global-inner')}>
					<div className={cx('logo')}>
						<Link to='/'><img width={150} height={27} src={logo} alt="Logo" /></Link>
					</div>
					
					<Search />

					<div className={cx('manage')}>
						<User />

						<Link to='wishlist'>
							<FontAwesomeIcon icon={faHeart} />
						</Link>

						<Cart />
					</div>
			</div>
		</div>
	);
}

export default MainHeader;