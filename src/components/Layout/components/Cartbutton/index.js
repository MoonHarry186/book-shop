import images from '~/assets/images'
import styles from './CartButton.module.css';
import classNames from 'classnames/bind';
import CartAmount from './CartAmount';

const cx = classNames.bind(styles);

function CartButton() {
	return ( 
		<div className={cx('wrapper')}>
			<img
				width={20}
				height={20}
				src={images.cart}
				alt="Cart" 
			/>
			<div className={cx('cart-amount')}>
				<CartAmount />
			</div>
		</div>
	);
}

export default CartButton;