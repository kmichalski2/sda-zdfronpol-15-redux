import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { addNotification } from '../notifications/notificationsSlice';
import { selectItems, selectCartTotal, removeFromCart, CartItemModel, decreaseQuantity, increaseQuantity, selectCartDisplayed } from './cartSlice';

export function Cart() {
    const items = useAppSelector(selectItems);
    const total = useAppSelector(selectCartTotal);
    const displayed = useAppSelector(selectCartDisplayed);
    const dispatch = useAppDispatch();

    const handleRemoveClick = (item: CartItemModel) => {
        dispatch(removeFromCart({ id: item.id}));
        dispatch(addNotification({ type: 'warning', message: `Produkt ${item.name} został usunięty z koszyka.`}));
    }

    const renderButtons = (item: CartItemModel) => {
        return (
            <>
                <button className="btn btn-light" onClick={() => dispatch(decreaseQuantity({ id: item.id }))}>
                    <i className="bi bi-dash"></i>
                </button>
                ( {item.quantity} )
                <button className="btn btn-light" onClick={() => dispatch(increaseQuantity({ id: item.id }))}>
                    <i className="bi bi-plus"></i>
                </button>
                <button className="btn btn-danger" onClick={() => handleRemoveClick(item)}>
                    <i className="bi bi-trash-fill"></i>
                </button>
            </>
        )
    }   

    // TODO: 6 Wyświetl informacje kiedy koszyk jest pusty

    return (
        <div className={"card position-fixed end-0 top-2 z-index-1 " + (displayed ? "d-block" : "d-none")}>
            <ul className="list-group">
                { items.map(item => <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="me-5">{item.name}</span>
                    <span><strong className="me-1">{item.price}</strong> {renderButtons(item)}</span>
                    </li>) }
                { items.length === 0 ? <li className="list-group-item">Koszyk jest pusty</li> : ""}    
                <li className="list-group-item list-group-item-secondary">
                    <strong>Total: {total}</strong>
                </li>
            </ul>
        </div>
    )
}