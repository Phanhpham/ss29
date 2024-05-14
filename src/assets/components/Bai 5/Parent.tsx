import React from 'react';
import Children from './Childrenn'

export default function Parent() {

const product={
    name:"rau",
    id:1,
    price:2000,
    quantity:12,
}

return (
    <div>
       <Children product ={product}/>

    </div>
)
}