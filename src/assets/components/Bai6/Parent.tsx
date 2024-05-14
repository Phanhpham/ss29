import React from 'react';
import Children from './Children'

export default function Parent() {
const users = [
    { id: 1,
         name: 'dung',
          address: 'hn',
           email: 'dungnha@example.com'
         },
    { id: 2,
         name: 'huyen', 
         address: 'haphong', 
         email: 'huyenn@example.com' 
        },
    { id: 3,
         name: 'Anh',
          address: 'nghe an',
           email: 'anh776@example.com'
         },
];
return (
    <div>
     
        <Children users={users} />
    </div>
)
}