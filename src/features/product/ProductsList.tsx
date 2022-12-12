import { CartItemModel } from '../cart/cartSlice';
import { Product } from './Product';
import { useAppSelector } from '../../app/hooks';
import { selectProducts } from './productSlice';

export function ProductsList() {
    const products = useAppSelector(selectProducts);

    return (
        <div>
            { products.map(product => <Product product={product} />)}
        </div>
    )
}