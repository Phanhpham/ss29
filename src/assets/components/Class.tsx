import React , {Component} from 'react'
interface Props{

}
interface State{
    name:string,
    age:number,
    address:string,
}
export default  class Class extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state={
            name:"minh thu",
            age:25,
            address:"HA NOI",
        }
    }
    // khai bao ham o tren render ()
    handleClick=()=>{
        // khi muon cap nhat state
        this.setState({
            age:20,
            name:"nhai"
        })
    }
    render(){
        return (
    <div>
        {/*
         * trong class de quan li state
         */}
         {this.state.name} nam nay {this.state.age} tuoi 
         {/*cap nhat state doi vs class */}
         <button onClick ={this.handleClick}>click</button>
    </div>
  )
    }
}
