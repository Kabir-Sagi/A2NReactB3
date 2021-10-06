import React, { Component } from 'react'
import axios from 'axios'

 class Lifecycle extends Component {
    componentDidMount() {
       axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
            console.log(res.data)
       })
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps() called")
  }

     constructor(props) {
         super(props)
     
        console.log("Constructor() Called")
        this.state ={
            name:"",
            city:""
        }
     }
          //update Phase
           shouldComponentUpdate() {
               console.log("ShouldComponentUpdate() is called")
               return false
           }
           getSnapshotBeforeUpdate() {
               console.log("GetsnapshotBefore is called")
               return null
           }

           componentDidUpdate() {
               console.log("componentDidUpdate() is called")
           }
     
         //unmounting phase
           componentWillUnmount() {
              alert("componentWillUnmount is triggered")
           }
      

     
    render() {
        console.group("render() is called")
        return (
            <div>
                  <h2>LifeCycle Methods</h2>
                  <button onClick={()=>{this.setState({name:"s"})}}>Update</button>
            </div>
        )
    }
}
export default Lifecycle
