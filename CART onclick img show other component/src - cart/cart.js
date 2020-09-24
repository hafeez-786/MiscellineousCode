import React, {useState} from 'react'
import {Button} from '@material-ui/core'


const Cart = ({ cart, removeFromCart }) => {
  return (
    <>
      <h1 className="main-heading">Cart</h1>
      <>
        {
          cart.map((product, index) => (
            <div className="cart-block" key={index}>
              <div className="img-left"><img src={product.image} alt={product.name} /></div>
              <div className="content-right">
                <h3>{product.name}</h3>
                <h4>Price: {product.price}</h4>
                <p>{product.details}</p>
                <Button
                  onClick={() => removeFromCart(product)}
                  variant="contained"
                  color="secondary">Remove</Button>
              </div>
            </div>
          ))
        }
      </>
    </>
  )
}
export default Cart