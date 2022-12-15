import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { searchProducts } from "./productSlice";

export function ProductsSearch() {
    const dispatch = useAppDispatch();
    const [phrase, setPhrase] = useState('');

    const searchForProduct = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(searchProducts({phrase}));
    }

    return (
        <form className="d-flex" role="search" onSubmit={searchForProduct}>
            <input onChange={(event) => setPhrase(event.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}