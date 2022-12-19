import './App.css';
import { Cart } from './features/cart/Cart';
import { AlertsList } from './features/notifications/AlertsList';
import { ProductsList } from './features/product/ProductsList';
import { Header } from './Header';

function App() {
  return (
    <div>
      <Header />

      <Cart />

      <main className="container mt-4">
        <ProductsList />
      </main>

      <AlertsList />
    </div>
  );
}

export default App;
