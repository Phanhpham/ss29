import React from 'react';
import Children from './Children_Comp'

const fullName: string ="Nguyen Van Namm"
export default function Parent_Comp() {

    return (
        <div>
            <h3>Ho va ten ben component cha:{fullName}</h3>
            <Children name={fullName}/>
        </div>
    )
}


