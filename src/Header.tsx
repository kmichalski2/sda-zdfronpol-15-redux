import { useAppDispatch, useAppSelector } from './app/hooks';
import { toggleCart, selectItemsQuantity } from './features/cart/cartSlice';

export function Header() {
    const dispatch = useAppDispatch();
    const totalQuantity = useAppSelector(selectItemsQuantity);

    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ReduxShop</a>
          <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
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