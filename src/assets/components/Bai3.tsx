import React, { useState } from 'react';

export default function Bai3(){
const [users, setUsers] = useState([
        { 
            id: 1,
             name: 'hoa',
              address: 'Hai phong' 
        },
        { 
            id: 2,
             name: 'lien',
             address: 'ha noi' },
        { 
            id: 3, 
            name: 'Anh', 
            address: 'thanh hoa' },
    ]);

    return (
          <div>
            <h1>User List</h1>
            <h2>danh sach ng dung</h2>
            <ul>
               {users.map((item,index)=>{
                return <li key ={index}>{item.id}.Ho va ten:{item.name} - {item.address}</li>
               })}

            </ul>
        </div>
    )
}
      
