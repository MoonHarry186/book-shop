import styles from './Search.module.css';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
		faCircleXmark,
		faMagnifyingGlass,
		faChartArea,
		faCaretDown,
		faCaretUp,
		faBacon
	} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import Dropdown from './Dropdown';
import { categoriesAPI } from '~/api';
import { productsAPI } from '~/api';
import { useDebounce } from '~/hooks';

const cx = classnames.bind(styles);

function Search() {

	const [productCategories, setProductCategories] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	
	const debounced = useDebounce(searchValue, 800)

	// Categories
	useEffect(() => {
			categoriesAPI().then(res => setProductCategories(res))
	}, [])

	// Search Results
	useEffect(() => {

		if (!debounced.trim()) {
			setSearchResults([])
			return
		}

		productsAPI(debounced).then(res => setSearchResults(res))
		
	}, [debounced])

	const handleSearch = (e) => {
		const value = e.target.value
		setSearchValue(value)
	}

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
				
				{searchValue && 
					<button className={cx('clear')}>
					<FontAwesomeIcon icon={faCircleXmark} />
				</button>
				}

				{/* {<FontAwesomeIcon className={cx('loading')} icon={faSpinner} />} */}

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