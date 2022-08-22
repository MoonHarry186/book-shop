import styles from './Search.module.css';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	// faCircleXmark,
	//  faSpinner,
	 faMagnifyingGlass,
	 faChartArea,
	 faCaretDown,
	 faCaretUp,
	 faBacon
	} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import Dropdown from './Dropdown';

const cx = classnames.bind(styles);

function Search() {

	const [productCategories, setProductCategories] = useState([]);
	const [productCategory, setProductCategory] = useState('');
	const [searchValue, setSearchValue] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	// Categories
	useEffect(() => {
		fetch('https://72.arrowhitech.net/tn1/harry-moon/wordpress/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query: `
				{
					productCategories {
						edges {
							node {
								id
								name
							}
						}
					}
				}
				`
			})
		}).then(res => res.json())
			.then(res => setProductCategories(res.data.productCategories.edges))
	}, [])

	const handleSearch = (e) => {
		setSearchValue(e.target.value)
	}

	// Search Results
	useEffect(() => {
		fetch('https://72.arrowhitech.net/tn1/harry-moon/wordpress/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query: `
				{
					products (first: null, after: null, where:{search: "${searchValue}"}) {
						edges {
							node {
								id
								name
								slug
							}
						}
					}
				}
				`
			})
		}).then(res => res.json())
			.then(res => setSearchResults(res.data.products.edges))
	}, [searchValue])

	console.log('re-render');

	return ( 
		<div className={cx('search')}>
			{/* Category Bar */}
			<div className={cx('category-options')}>
				<div className={cx('options')}>
					<FontAwesomeIcon icon={faChartArea} />
					<p>Categories</p>
				</div>

				<div className={cx('verticle-menu')}>
					<Dropdown data={productCategories} icon={faBacon} />
				</div>

				<div className={cx('caret', 'down')}>
					<FontAwesomeIcon icon={faCaretDown} />
				</div>
				<div className={cx('caret', 'up')}>
					<FontAwesomeIcon icon={faCaretUp} />
				</div>
			</div>
			
			{/* Search Bar */}
			<div className={cx('search-wrapper')}>
				<input 
					className={cx('search-bar')} 
					placeholder="Search books and categories"
					value={searchValue}
					onChange={(e) => handleSearch(e)}
				/>
				{/* <button className={cx('clear')}>
					<FontAwesomeIcon icon={faCircleXmark} />
				</button> */}
				{/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

				<div className={cx('verticle-menu', 'search-result')}>
					<Dropdown data={searchResults} icon={faMagnifyingGlass} />
				</div>
			
				<button className={cx('search-btn')}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</button>
			</div>
		</div>
	);
}

export default Search;