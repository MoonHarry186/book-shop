import { Product } from "~/components/Product";
import styles from "./BestSalingBooks.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function BestSalingBooks() {
    return ( 
        <div className={cx("best-saling")}>
            <div className={cx('inner')}>
                <div className={cx('products-list')}>
                    <Product />
                </div>
            </div>
        </div>
    );
}

export default BestSalingBooks;