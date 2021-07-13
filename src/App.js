import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Orders from './components/Orders/Orders';
import ProductContextProvider from './context/ProductContext';


function App() {
  return (
    <div className="App">
        <Router>
          <ProductContextProvider>
            <Header/>
            <Route path='/' component={Products} exact />
            <Route path='/cart' component={Cart}/>
            <Route path="/orders" component={Orders} />
          </ProductContextProvider>
        </Router>  
        
     
    </div>
  );
}

export default App;
