import React, { Component } from 'react'
interface Props{

}
interface State{
    fullName:string,
}
export default class Bai1 extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state={
            fullName:"Nguyen Minh Son",
        }
    }
  render() {
    return (
      <div>Bai1
        <p>Ho va ten :{this.state.fullName}</p>
      </div>
    )
  }
}
