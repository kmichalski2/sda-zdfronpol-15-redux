import { Product } from './Product';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectResults, sortByPriceAsc, sortByPriceDesc } from './productSlice';
import styles  from './Product.module.css';
import { Alert } from '../../Alert';

export function ProductsList() {
    const products = useAppSelector(selectResults);
    const dispatch = useAppDispatch();

    return (
        <>
            { products.length > 0 ? 
                <>
                    <div>
                        Price: 
                        <div className="ms-1 btn-group">
                            <button onClick={() => dispatch(sortByPriceDesc())} className="btn btn-light"><i className="bi bi-sort-down"></i></button>
                            <button onClick={() => dispatch(sortByPriceAsc())} className="btn btn-light"><i className="bi bi-sort-up-alt"></i></button>
                        </div>
                    </div>
                    <div className={styles.productsList}>{products.map(product => <Product product={product} />)}</div> 
                </>
                : <Alert id={0} type="info" message="Wpisz szukaną frazę, aby znaleźć swój produkt" />
            }
        </>
    )
}

    // Zadanie 2
    // W zaleznosci od podanego typu wyswietl odpowiedni rodzaj alertu
    // success - zielony alert
    // info - niebieski alert
    // warning - zolty alert
    // error - czerwony alert
    // jezeli nie znajdzie typu to szary alert