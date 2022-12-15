import { Product } from './Product';
import { useAppSelector } from '../../app/hooks';
import { selectResults } from './productSlice';
import styles  from './Product.module.css';
import { Alert } from '../../Alert';

export function ProductsList() {
    const products = useAppSelector(selectResults);

    return (
        <>
            { products.length > 0 ? 
                <div className={styles.productsList}>{products.map(product => <Product product={product} />)}</div> 
                : <Alert type="info" message="Wpisz szukaną frazę, aby znaleźć swój produkt" />
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