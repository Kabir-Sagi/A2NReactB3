import React, { Component } from 'react'
import myContext from './MyContextObject/mycontext'

 class D extends Component {
    render() {
        return (
            <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            <h2>D Component</h2>
                        </div>
                        <div className="card-body">
                         <myContext.Consumer>
                              {
                                     (data)=>{
                                    return    <div>
                                           <h4>NAME:{data.name}</h4> 
                                           <h4>City:{data.city}</h4> 
                                            
                                             </div>
                                     }

                              }

                         </myContext.Consumer>
                        </div>
                    </div>
                </div>
            </div>
    </div>
        )
    }
}
export default D
