import styles from './Search.module.css';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const cx = classnames.bind(styles);

function Search() {
	return ( 
		<div className={cx('search')}>
			<select>
				<option>categories</option>
			</select>
			<input className={cx('search-bar')} placeholder="Search books and categories"/>
			<button className={cx('clear')}>
				<FontAwesomeIcon icon={faCircleXmark} />
			</button>
			<FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

			<button className={cx('search-btn')}>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</button>
		</div>
	);
}

export default Search;