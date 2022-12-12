import styles from './Product.module.css';
import { useAppDispatch } from '../../app/hooks';
import { addToCart, CartItemModel } from '../cart/cartSlice';
import { ProductModel } from './productSlice';

export interface ProductProps {
    product: ProductModel;
}

export function Product(props: ProductProps) {
    const dispatch = useAppDispatch();
    const { product } = props;
    const cartItem: CartItemModel = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
    }

    return (
        <div className={styles.product}>
            <h5>{product.name}</h5>
            <em>{product.price}</em>

            <button className={styles.btn} onClick={() => dispatch(addToCart(cartItem))}>Add to cart</button>
        </div>
    )
}