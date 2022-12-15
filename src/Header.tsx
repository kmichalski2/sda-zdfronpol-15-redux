import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectItemsQuantity, toggleCart } from './features/cart/cartSlice';
import { ProductsSearch } from './features/product/ProductsSearch';

export function Header() {
    const dispatch = useAppDispatch();
    const totalQuantity = useAppSelector(selectItemsQuantity);

    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">ReduxShop</a>
            <ProductsSearch />
            <button className="btn btn-warning position-relative me-1" onClick={() => dispatch(toggleCart())}>
                <i className="bi bi-cart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalQuantity}
                </span>
            </button>
        </div>
      </nav>
    )
}