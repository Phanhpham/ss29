import React from 'react'


interface Users{
    id:number,
    name:string,
   address:string,
    email:string,
}
interface Info{
    users:Users,
}
export default function Children(props:Info) {
const {users}=props
  return (
    <div>Childrenn
      <ul>
                {users.map(users => (
                    <li key={users.id}>
                        <h3>{users.name}</h3>
                        <p>Address: {users.address}</p>
                        <p>Email: {users.email}</p>
                    </li>
 ))}
            </ul>
    </div>
  );
}