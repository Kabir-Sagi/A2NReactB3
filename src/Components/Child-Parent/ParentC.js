import React, { Component } from 'react'
import Child from '../Props/Child/Child'
import ChildC from './ChildC'

 class ParentC extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            childData:""   
         }
     }
       upDateState = (data)=>{
           this.setState({
               childData:data
           })
       }
     
    render() {
        return (
            <div className="container mt-5">
                 <div className="row">
                     <div className="col">
                         <div className="card">
                             <div className="card-header bg-primary text-white text-center">
                                 <p className="h4">Parent Component</p>
                             </div>
                             <div className="card-body">
                                 <ChildC  updateState={this.upDateState}/>
                             </div>
                             <div className="card-footer bg-primary text-white">
                                <p className="h3"> ChildData:&nbsp;{this.state.childData} </p>
                             </div>
                         </div>
                     </div>
                 </div>
            </div>
        )
    }
}
export default ParentC
