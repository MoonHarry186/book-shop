import classNames from "classnames/bind";
import styles from "./CartPopup.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeStatus } from "~/redux/cartSlice";
import { useEffect, useRef } from "react";

const cx = classNames.bind(styles);

function CartPopup() {

	const active = useSelector((state) => state.cart.active)
	const dispatch = useDispatch()
	const cartPopupRef = useRef()

	const handleClick = () => {
		setTimeout(() => {
			dispatch(changeStatus())
		}, 150)
	}
	
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (cartPopupRef.current && !cartPopupRef.current.contains(e.target)) {
				if (active === true) {
					setTimeout(() => {
						dispatch(changeStatus())
					}, 150)
				}
			}
		}

		document.addEventListener("mousedown", handleClickOutside)

		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [cartPopupRef])


	return ( 
		<>
			<div ref={cartPopupRef} className={cx('cart-popup')}>
				<div className={cx('inner')}>
					<div className={cx('popup-header')}>
						<span className={cx('cart-popup-title')}>Shoping cart</span>
						<a onClick={() => handleClick()} href="#" className={cx('close-popup')}>Close</a>
					</div>
					
					<div className={cx('cart-popup-body')}>
						
					</div>
				</div>
			</div>
			<div className={cx('cart-slide-overlay')}></div>
		</>
	);
}

export default CartPopup;