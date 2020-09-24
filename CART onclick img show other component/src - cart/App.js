import React, { useState } from 'react';
import './product.css'
import { Container, Button } from '@material-ui/core'
//import dataImage from './data.json'
import Products from './Products'
import Cart from './cart'


const PAGE_PRODUCTS = 'product';
const PAGE_CART = 'cart';
function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  

  // For cart button
  const addToCart = (product) => {
    //alert('Products added into the cart!')
    setCart([...cart, { ...product }])
  }

  // Remove cartItems from cart by remove button
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(product => product !== productToRemove))
  }

  // Move into page from one to another by click buttons 
  const navigateTo = (nextPage) => {
    setPage(nextPage)
  }


  return (
    <Container>
      <header>
        <Button variant="outlined"
          onClick={() => navigateTo(PAGE_CART)}
        >Cart ({cart.length})</Button>

        <Button variant="outlined"
          onClick={() => navigateTo(PAGE_PRODUCTS)}
        >View Products</Button>
      </header>
      <div>
        {page === PAGE_PRODUCTS && (<Products addToCart={addToCart} />)}
        {page === PAGE_CART && (<Cart cart={cart} removeFromCart={removeFromCart}/>)}
      </div>
    </Container>

  );
}
export default App