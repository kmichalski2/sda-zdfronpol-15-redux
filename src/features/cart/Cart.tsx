import { useAppSelector, useAppDispatch } from '../../app/hooks';
import styles from './Cart.module.css';
import { selectItems, selectCartTotal, removeFromCart, CartItemModel, decreaseQuantity, increaseQuantity } from './cartSlice';

export function Cart() {
    const items = useAppSelector(selectItems);
    const total = useAppSelector(selectCartTotal);
    const dispatch = useAppDispatch();

    // TODO: 6 Dodaj akcję zwiększenia ilości przedmiotu w koszyku
    // Oraz akcję zmniejsza ilości przedmiotu w koszyku
    // Jeśli ilość równa 1 akcja powinna usunąć przedmiot z koszyka

    const renderButtons = (item: CartItemModel) => {
        return (
            <>
                <button onClick={() => dispatch(decreaseQuantity({ id: item.id }))}>-</button>
                ( {item.quantity} )
                <button onClick={() => dispatch(increaseQuantity({ id: item.id }))}>+</button>
                <button onClick={() => dispatch(removeFromCart({ id: item.id}))}>Delete</button>
            </>
        )
    }   

    return (
        <div className={styles.cart}>
            <ul className={styles.list}>
                { items.map(item => <li key={item.id}>{item.name} - <strong>{item.price}</strong> {renderButtons(item)}</li>) }
            </ul>

            <div>Total: {total}</div>
        </div>
    )
}