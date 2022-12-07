import {Route, Routes} from 'react-router-dom'
import Products from './pages/Products'
import Welcome from './pages/Welcome';
import MainHeader from './components/MainHeader'
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div>
    <MainHeader/>
    <main>
    <Routes>
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path="/products" exact>
        <Products/>
      </Route>
      <Route path='/products/:productId'>
        <ProductDetail/>
      </Route>
      </Routes>
      </main>
    </div>
  );
}

export default App;
