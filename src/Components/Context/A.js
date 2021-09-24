import React, { Component } from 'react'
import B from './B'
import myContext from './MyContextObject/mycontext'

 class A extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:"",
              city:""
         }
     }
     
    render() {
        return (
            <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <h2>A Component</h2>
                                </div>
                                <div className="card-body">
                                    <button className="btn btn-primary" 
                                   onClick={()=>{
                                       this.setState({
                                           name:"A2N Academy",
                                           city:"Banglore"
                                       })
                                   }}>Send Data</button>
                                  <myContext.Provider value={this.state}>
                                      <B />
                                  </myContext.Provider>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
export default A
