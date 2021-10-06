import React, { Component } from 'react'
import action from '../../Action/action'

class Info extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:""
        }
    }
    

    sendDataToRedux = ()=>{
           action(this.state.name,"name")
    }

    render() {
        return (
            <div className="container mt-5">
                 <div className="row">
                     <div className="col-sm-4"></div>
                     <div className="col-sm-4">
                         <div className="card">
                             <div className="card-header bg-dark text-white">
                                 Redux
                             </div>
                             <div className="card-body form-group">
                                <input type="text" className="form-control" placeholder="enter name"
                                onChange={(event)=>{this.setState({
                                    name:event.target.value
                                })}} />
                            
                                <button onClick={this.sendDataToRedux} className="btn btn-primary mt-2">Send data to store</button>
                             </div>
                         </div>
                     </div>
                    
                 </div>
            </div>
        )
    }
}
export default Info
