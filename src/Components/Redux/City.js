import React, { Component } from 'react'
import { act } from 'react-dom/test-utils'
import action from '../../Action/action'

class City extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             city:""
        }
    }

    sendCityData = ()=>{
      action(this.state.city,"city")
    }
    
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                 <div className="col-sm-4"></div>
                 <div className="col-sm-4">
                       <div className="card">
                       <div className="card-header bg-dark text-white">
                                 Enter City
                             </div>
                             <div className="card-body form-group">
                                <input type="text" className="form-control" placeholder="Enter City"
                                onChange={(event)=>{this.setState({
                                    city:event.target.value
                                })}}
                               />
                            
                                <button onClick={this. sendCityData} className="btn btn-primary mt-2">Send data to store</button>
                             </div>
                       </div>
                 </div>
                 <div className="col-sm-4"></div>

                </div>
                
            </div>
        )
    }
}

export default City
