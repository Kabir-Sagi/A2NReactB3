import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             info:''
        }
    }

    sendData = ()=>{
        this.props.updateState(this.state.info)
    }
    
    render() {
        return (
            <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header bg-primary text-white">Child Comp</div>
                        <div className="card-body">
                            <div className="form-inline">
                                <input 
                                type="text" 
                                placeholder="Enter Data" 
                                className="form-control" 

                                 onChange={(event)=>{this.setState({
                                     info:event.target.value
                                 })}}

                                />
                              
                            </div>
                            <button className="btn btn-primary px-3" onClick={this.sendData}>Send</button>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
