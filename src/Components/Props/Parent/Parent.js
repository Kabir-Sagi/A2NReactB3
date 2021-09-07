import React, { Component } from 'react'
import Child from '../Child/Child'

 class Parent extends Component {
     constructor() {
         super()

         this.state = {
             name:"A2N Academy",
             city:"Banglore",
             email:"A2N@gmail.com"  //30
         }
     }
    render() {
        return (
            <div class="conatiner">
                {/* <h2>Parent Component</h2> */}
               <Child info={this.state} /> 
            </div>
        )
    }
} 
export default Parent
