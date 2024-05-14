import React from 'react';
interface Name{
    name:string,
}

export default function Children_Comp(prop:Name) {
    const{name}=prop
  return (
    <div>Children_Comp
        <h3>Ho va ten ben component con:{name}</h3>
    </div>
  )
}