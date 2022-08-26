import { Product } from "~/components/Product";
import styles from "./BestSalingBooks.module.css";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { productsListAPI } from "~/api";
import { useSelector, useDispatch } from "react-redux";
import { updateProductsList } from "~/redux/productsSlice";

const cx = classNames.bind(styles);

function BestSalingBooks() {

    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()


    useEffect(() => {
        productsListAPI().then(res => dispatch(updateProductsList(res)))
    } , [])

    return ( 
        <section className={cx('best-saling-section')}>
            <div className={cx('inner')}>
                <div className={cx('products-list')}>
                    <Product products={products}/>
                </div>
            </div>
        </section>
    );
}

export default BestSalingBooks;