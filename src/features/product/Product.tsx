import styles from './Product.module.css';
import { useAppDispatch } from '../../app/hooks';
import { addToCart, ProductModel } from '../cart/cartSlice';

export function Product() {
    const dispatch = useAppDispatch();

    const product: ProductModel = {
        id: '1',
        name: 'T-Shirt',
        price: 39.99,
    }

    return (
        <div className={styles.product}>
            <h5>{product.name}</h5>
            <em>{product.price}</em>

            <button className={styles.btn} onClick={() => dispatch(addToCart(product))}>Add to cart</button>
        </div>
    )
}