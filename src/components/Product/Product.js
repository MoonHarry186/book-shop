import styles from "./Product.module.css";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { faHeart, faEye, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { updateOrderNumber } from "~/redux/cartSlice";

const cx = classNames.bind(styles);

function Product({products}) {
    
    const orderNumber = useSelector(state => state.cart.orderNumber)
    const dispatch = useDispatch()

    return ( 
        products.map((product, index) => (
            <div key={product.id} className={cx("product")}>
                <Link to="/">
                    <div className={cx('product-image')}>
                        <img width={600} height={800} src={product.image.sourceUrl} alt={product.image.altText} />
                    </div>
                </Link>

                <div className={cx('group-actions')}>
                    <div className={cx('shop-actions')}>
                        <div className={cx('add-to-wishlist')}>
                            <button className={cx('add-to-wishlist-btn')}>  
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                        </div>
                        <div className={cx('review')}>
                            <button className={cx('review-btn')}>
                                <FontAwesomeIcon icon={faEye} />
                            </button>
                        </div>
                        <div onClick={() => dispatch(updateOrderNumber())} className={cx('add-to-cart-btn')}>
                            <button className={cx('add-to-cart')}>
                                <FontAwesomeIcon icon={faCartPlus} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className={cx('product-caption')}>
                    <h3 className={cx('product-title')}>{product.name}</h3>
                    <div className={cx('product-author')}>{product.productFields.author}</div>
                    <div className={cx('price')}>

                        <span className={cx('regular-price')}>{product.regularPrice}</span>
                        {product.salePrice && <span className={cx('sale-price')}>{product.salePrice}</span>}
                    </div>
                </div>
            </div>
        ))
       
    );
}

export default Product;