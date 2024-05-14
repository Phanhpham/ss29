import React, { Component } from 'react'
interface Props{

}
interface State{
    fullName:string,
    id:number,
    date:string,
    address:string,
}
export default class Bai2 extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state={
            id:1,
            fullName:"Nguyen Minh Son",
            date:"12/2/2007",
            address:"ha noi"

        }
    }
  render() {
    return (
      <div>Bai2
        <p>Ho va ten :{this.state.fullName} id:{this.state.id}  date:{this.state.date} address:{this.state.address}</p>
      </div>
    )
  }
}
