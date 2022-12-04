# ReactRouter

React router version 5

```javascript
npm install react-router-dom@5
```

Setup Routes

```javascript
import {Route} from 'react-router-dom'
import Products from './pages/Products'
import Welcome from './pages/Welcome';
 
function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path="/products">
        <Products/>
      </Route>
    </div>
  );
}
 
export default App;
 

```

```javascript
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
 
import './index.css';
import App from './App';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter><App /></BrowserRouter>);
 

```

Work with links

```javascript
import {NavLink} from 'react-router-dom';
import classes from './MainHeader.module.css'
 
const MainHeader =() =>{
    return (
    <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName={classes.active} to='/welcome'>Welcome</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to='/products'>Products</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    )
}
 
export default MainHeader;

```
Dynamic Routes with Params

Switch permet de n’afficher qu’une seule route (la premiere trouvee) au lieu de toutes les routes qui contiennent des mots du lien

```javascript

import {Route, Switch} from 'react-router-dom'
import Products from './pages/Products'
import Welcome from './pages/Welcome';
import MainHeader from './components/MainHeader'
import ProductDetail from './pages/ProductDetail';
 
function App() {
  return (
    <div>
    <MainHeader/>
    <main>
    <Switch>
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path="/products" exact>
        <Products/>
      </Route>
      <Route path='/products/:productId'>
        <ProductDetail/>
      </Route>
      </Switch>
      </main>
    </div>
  );
}
 
export default App;
 


```

```javascript
import {useParams} from 'react-router-dom';
 
const ProductDetail = () => {
    const params = useParams();
 
    return (
        <section>
            <h1>Product Detail</h1>
            <p>{params.productId}</p>
        </section>
 
    )
}
 
export default ProductDetail;

```

```javascript
import {Link} from 'react-router-dom'
 
const Products = () => {
    return (
    <section>
    <h1>The Products Page</h1>
    <ul>
        <li><Link to='/products/p1'>A book</Link></li>
        <li><Link to='/products/p2'>A Carpet</Link></li>
        <li><Link to='/products/p3'>An Online Course</Link></li>
    </ul>
 
    </section>
    )
}
 
export default Products

```
Redirect

```javascript
import {Route, Switch, Redirect} from 'react-router-dom'
import Products from './pages/Products'
import Welcome from './pages/Welcome';
import MainHeader from './components/MainHeader'
import ProductDetail from './pages/ProductDetail';
 
function App() {
  return (
    <div>
    <MainHeader/>
    <main>
    <Switch>
    <Route path='/' exact>
      <Redirect to='/welcome'/>
    </Route>
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path="/products" exact>
        <Products/>
      </Route>
      <Route path='/products/:productId'>
        <ProductDetail/>
      </Route>
      </Switch>
      </main>
    </div>
  );
}
 
export default App;
 

```
