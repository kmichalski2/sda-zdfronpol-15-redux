import { useAppSelector } from '../../app/hooks';
import styles from './Cart.module.css';
import { selectItemsQuantity, selectItems, selectCartTotal } from './cartSlice';

export function Cart() {
    const items = useAppSelector(selectItems);
    const total = useAppSelector(selectCartTotal);

    return (
        <div className={styles.cart}>
            <ul className={styles.list}>
                { items.map(item => <li>{item.name} - <strong>{item.price}</strong></li>) }
            </ul>

            <div>Total: {total}</div>
        </div>
    )
}