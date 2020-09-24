import React, {useState} from 'react'
import {Button} from '@material-ui/core'

const Products = ({ addToCart }) => {

  const [products] = useState([
    {
      name: "Battery",
      price: "$1",
      image: "https://5.imimg.com/data5/JV/CY/MY-21893711/dura-cell-500x500.jpg",
      details: 'The most significant difference between the two, is their size. AAA batteries are smaller compared to AA. \nThis is important, as battery operated devices often use only one specific size'
    },
    {
      name: "LED Light",
      price: "$5",
      image: "https://www.crompton.co.in/wp-content/uploads/2019/11/Anti-Bac-Bulb.png",
      details: 'The Philips household A19 LED is an affordable replacement providing significant energy savings and replacing your current 60-Watt incandescent light bulb. This Philips 8.5-Watt LED A19 household light bulb is the perfect replacement for anywhere traditional light bulbs are used, such as table or floor lamps.'
    },
    {
      name: "Computer",
      price: "$2000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlVMy4bbiRNjxgjL0tPDHB0_UEAFtUa4PK6g&usqp=CAU",
      details: 'Elegant yet simple, the stand and base of the Ideacentre A340 is sure to impress— and save on desk space. Whether it’s for work, entertainment, or family video-chats, this eye-catching PC will look great in any room.'
    },
    {
      name: "Crompton Fan",
      price: "$100",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ1HLYnt1WI1Pb4Nu0tKxhbVnGmykJ7jbZYw&usqp=CAU",
      details: 'Crompton fans are durable, and you can be assured of good build quality. The biggest disappointment for us from Crompton was their desistance from manufacturing energy'
    }
  ])

  
  return (
    <div>
      <>
        <h1 className="main-heading">Products</h1>
        <>
          {
            products.map((product, index) => (
              <div className="product-card" key={index}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <h4>Price: {product.price}</h4>
                <Button
                  onClick={() => addToCart(product)}
                  variant="contained"
                  color="secondary">Add To Cart</Button>
              </div>
            ))
          }
        </>
      </>
    </div>
  )
}

export default Products