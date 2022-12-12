import './App.css';
import { Cart } from './features/cart/Cart';
import { ProductsList } from './features/product/ProductsList';

function App() {
  return (
    <div className="App">
        <Cart />

        <ProductsList />
    </div>
  );
}

export default App;
