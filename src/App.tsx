import './App.css';
import { Cart } from './features/cart/Cart';
import { ProductsList } from './features/product/ProductsList';
import { Header } from './Header';

function App() {
  return (
    <div>
      <Header />

      <Cart />

      <ProductsList />
    </div>
  );
}

export default App;
