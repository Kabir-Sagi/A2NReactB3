import React, { Component } from 'react'
import ChildC from '../Child-parent-2/Child'

export default class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentData:'No Data'
        }
    }

    updateState= (childData)=>{
        this.setState({
            parentData:childData
        })
    }
    
    render() {
        return (
            <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header bg-dark text-white">
                            <h2>Parent Component</h2>
                        </div>
                        <div className="card-body">
                            <ChildC updateState={this.updateState} />
                           
                        </div>
                        <div className="card-footer text-danger">
                            <h1>Data:&nbsp;{this.state.parentData}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
