import React , {useState}from 'react'

export default function Function() {
    const [fullName,setFullName]=useState<string>("hoa");
    const [age,setAge]=useState<number>(13);
    const [students,setStudents]=useState<string[]>([]);
    const [isActive,setIsActive]=useState<boolean>(true);
    const handleChange=()=>{
        setAge(14);
        setFullName("Hong");
    }
  return (
    <div>Function
        {/*
        State:dung de quan li du lieu trong component 
        doi vs Function de quanli du lieu dung useState,
        day la 1 hook sinh ra giup function co the quan li du lieu
        state co the thay doi gtri dc 
        */}
        <h1>Hello</h1>
    </div>
  )
}
