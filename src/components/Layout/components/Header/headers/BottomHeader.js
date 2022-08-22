import styles from './BottomHeader.module.css'
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function BottomHeader() {
	const [menus, setMenus] = useState([])

	useEffect(() => {
		fetch('https://72.arrowhitech.net/tn1/harry-moon/wordpress/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query: `
				{
					menu(id: "Primary Menu", idType: NAME) {
						menuItems {
							nodes {
								url
								id
								label
							}
						}
					}
				}
				`
			})
		}).then(res => res.json())
			.then(res => {
				setMenus(res.data.menu.menuItems.nodes);
				return res
			})
	}, [])

	return ( 
		<div className={cx('bottom-header')}>
			<div className={cx('inner', 'global-inner')}>
				<ul>
					{menus.map((menu, index) => {
						const wpurl = `https://72.arrowhitech.net/tn1/harry-moon/wordpress`
						const onlyPath = menu.url.replace(wpurl, ``)
						return (
							<li key={menu.id}><Link to={`${onlyPath}`}>{menu.label}</Link></li>
						)
					})}
				</ul>
			</div>
		</div>
	);
}

export default BottomHeader;