
import { Link } from 'react-router-dom';
import styles from './Dropdown.module.css';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classnames.bind(styles);

function Dropdown({data, icon}) {
	if (data.length > 0) {
		return ( 
			<ul className={cx('menu')}> 
				{data.map((productCategory, index) => {
					if (productCategory) {
						return (
							(
								<li key={productCategory.node.id}><Link to={`${productCategory.node.slug}`}><FontAwesomeIcon icon={icon} /><span>{productCategory.node.name}</span></Link></li>
							)
						)
					}
				})}
			</ul>
		);
	}
}

export default Dropdown;