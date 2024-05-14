import React from 'react'
interface Product{
    id:number,
    name:string,
    price:number,
    quantity:number,
}

interface Info{
    product:Product,
}
export default function Childrenn(props:Info) {
const {product}=props
  return (
    <div>Childrenn
          <p>Product ID: {product.id}</p>
            <p>Product Name: {product.name}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
    </div>
  )
}