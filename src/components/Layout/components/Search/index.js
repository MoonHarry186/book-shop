import styles from './Search.module.css';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faChartArea } from '@fortawesome/free-solid-svg-icons';
const cx = classnames.bind(styles);

function Search() {
	return ( 
		<div className={cx('search')}>
			
			<div className={cx('select-wrapper')}>
				<FontAwesomeIcon icon={faChartArea} />
				<select>
					<option>categories</option>
				</select>
			</div>

			<div className={cx('search-wrapper')}>
				<input className={cx('search-bar')} placeholder="Search books and categories"/>
				<button className={cx('clear')}>
				<FontAwesomeIcon icon={faCircleXmark} />
				</button>
				<FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

				<button className={cx('search-btn')}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</button>
			</div>
		</div>
	);
}

export default Search;