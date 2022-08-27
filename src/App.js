import './styles/App.css';
import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { cartReducer } from './reducers/cartReducer';
import Products from './components/Products';
import Cart from './components/Cart';
function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: []
  })
  //a function to fetch Products
  const fetchProducts = async() => {
    const {data} = await axios.get('https://dummyjson.com/products')
    // console.log(data.products);
    dispatch({
      type: "ADD_PRODUCTS", 
      payload: data.products
    })
  }
  //we need to call the api whenever our component is rendered, so we call useEffect
  useEffect(()=>{
    fetchProducts();
  }, []) 
  // console.log(state);
  //since the dependacy array is empty fetchProducts is called only when component is Mounted/Rendered 
  return (
    <div className="App">
    <Products state={state} dispatch={dispatch}/>
    <Cart state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
