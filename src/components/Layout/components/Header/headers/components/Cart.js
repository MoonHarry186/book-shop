import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import  { useSelector, useDispatch } from "react-redux"
import { changeStatus } from "~/redux/cartSlice";

import classNames from "classnames/bind";
import styles from "../MainHeader.module.css";

const cx = classNames.bind(styles)


function Cart() {

	const orderNumber = useSelector(state => state.cart.orderNumber)
	const dispatch = useDispatch()

	return ( 
		<li onClick={() => dispatch(changeStatus())}>
			<FontAwesomeIcon icon={faCartPlus} />
			<span className={cx('count')}>{orderNumber}</span>
		</li>
	);
}

export default Cart;