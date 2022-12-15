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
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                    {product.description}
                </p>
            </div>

            <div className="card-footer d-flex justify-content-between align-items-center">
                <button className="btn btn-success" onClick={() => dispatch(addToCart(cartItem))}>Add to cart</button>
                <em className="fw-bold">{product.price} PLN</em>
            </div>
        </div>
    )
}